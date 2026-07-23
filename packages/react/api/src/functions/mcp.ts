import {
  app,
  type HttpRequest,
  type HttpResponseInit,
  type InvocationContext,
} from "@azure/functions"
import { createStorybookMcpHandler } from "@storybook/mcp"
import { basename } from "node:path"

const MANIFESTS_BASE_URL = "https://ds.factorial.dev/manifests"

type Handler = Awaited<ReturnType<typeof createStorybookMcpHandler>>

let _handler: Handler | null = null

async function getHandler(): Promise<Handler> {
  if (!_handler) {
    _handler = await createStorybookMcpHandler({
      manifestProvider: async (_request: Request | undefined, path: string) => {
        const fileName = basename(path)
        const response = await fetch(`${MANIFESTS_BASE_URL}/${fileName}`)
        if (!response.ok) {
          throw new Error(
            `Failed to fetch manifest from ${MANIFESTS_BASE_URL}/${fileName}: ${response.status} ${response.statusText}`
          )
        }
        return response.text()
      },
    })
  }
  return _handler
}

async function mcpFunction(
  request: HttpRequest,
  _context: InvocationContext
): Promise<HttpResponseInit> {
  // MCP's Streamable HTTP transport treats GET as a request to open a
  // long-lived SSE stream for server->client notifications. Azure Functions
  // cannot hold such a stream open, so the GET hangs with no response and
  // clients report a "backend call failure". We never emit server-initiated
  // notifications, so we signal "no SSE stream at this endpoint" with a 405,
  // as the MCP spec prescribes — compliant clients then continue POST-only.
  if (request.method === "GET") {
    return {
      status: 405,
      headers: { Allow: "POST, OPTIONS" },
    }
  }

  const handler = await getHandler()

  const fetchRequest = new Request(request.url, {
    method: request.method,
    headers: Object.fromEntries(request.headers.entries()),
    body:
      request.method !== "GET" && request.method !== "HEAD"
        ? Buffer.from(await request.arrayBuffer())
        : undefined,
  })

  const response = await handler(fetchRequest)
  const body = await response.arrayBuffer()

  return {
    status: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body: Buffer.from(body),
  }
}

app.http("mcp", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  route: "mcp",
  handler: mcpFunction,
})

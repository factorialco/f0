import json, subprocess, sys

BASE = "http://127.0.0.1:3845/mcp"

def post(payload, session=None, timeout=30):
    cmd = ["curl", "-s", "--max-time", str(timeout), "-X", "POST", BASE,
           "-H", "Content-Type: application/json",
           "-H", "Accept: application/json, text/event-stream",
           "-D", "/tmp/figma_headers.txt"]
    if session:
        cmd += ["-H", f"mcp-session-id: {session}"]
    cmd += ["-d", json.dumps(payload)]
    out = subprocess.run(cmd, capture_output=True, text=True).stdout
    return out

def parse_sse(raw):
    for line in raw.splitlines():
        if line.startswith("data: "):
            return json.loads(line[6:])
    try:
        return json.loads(raw)
    except Exception:
        return {"raw": raw[:500]}

# 1. initialize
init = post({"jsonrpc":"2.0","id":1,"method":"initialize","params":{
    "protocolVersion":"2024-11-05","capabilities":{},
    "clientInfo":{"name":"f0compose-cli","version":"1.0"}}})
session = None
for line in open("/tmp/figma_headers.txt"):
    if line.lower().startswith("mcp-session-id:"):
        session = line.split(":",1)[1].strip()
print("session:", session, file=sys.stderr)

# 2. initialized notification
post({"jsonrpc":"2.0","method":"notifications/initialized"}, session)

# 3. tool call from argv
tool = sys.argv[1]
args = json.loads(sys.argv[2])
resp = post({"jsonrpc":"2.0","id":2,"method":"tools/call",
             "params":{"name":tool,"arguments":args}}, session, timeout=90)
result = parse_sse(resp)
print(json.dumps(result, indent=1)[:200], file=sys.stderr)
# Print text contents
for item in result.get("result", {}).get("content", []):
    if item.get("type") == "text":
        print(item["text"])

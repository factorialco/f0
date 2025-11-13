import chalk from "chalk"
import { consola } from "consola"
import { readFileSync } from "fs"
import { spawnSync } from "node:child_process"
import { existsSync } from "node:fs"
import { resolve } from "path"
import { UserConfig } from "vite"

const consolaPrefix = chalk.cyanBright("[Sync plugin]")

type CoderSyncPluginConfig = {
  sources?: string[]
  target: string
}

/**
 * @description Sync plugin
 * This plugin will syncronize the build files between the local and the remote server (coder)
 * The list of the files and folders to sync is defined in the package.json file in the attribute "files"
 * The target is the remote server where the files will be copied
 */
export function buildSyncPlugin(pluginConfig: CoderSyncPluginConfig) {
  consola.info("Sync plugin")

  let enabled = true
  let sources = pluginConfig.sources
  // If no sources are defined, use the package.json files attribute
  if (!sources) {
    consola.info("Using package.json files attribute as source")
    const packageJsonPath = resolve(__dirname, "../package.json")
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"))
    sources = [...packageJson.files, packageJsonPath]
  }

  sources = sources.filter((source) => Boolean(source) && existsSync(source))

  consola.debug(consolaPrefix, sources)

  return {
    name: "coder-sync",
    description: "Sync files to remote server after build",
    config(config: UserConfig, { command }: { command: string }) {
      if (command !== "build" && !config.build?.watch) {
        console.warn(
          'The buildSync plugin can only be used in "build" mode and "watch". Skipping...'
        )
        enabled = false
      }
    },
    closeBundle: async () => {
      if (!enabled) {
        return
      }

      consola.start(
        consolaPrefix,
        `Syncing files to ${chalk.whiteBright.bold(pluginConfig.target)}`
      )
      try {
        const start = Date.now()
        consola.debug(consolaPrefix, "Syncing files to", pluginConfig.target)

        const { output, status } = spawnSync("rsync", [
          "-avz",
          "--delete",
          ...sources,
          pluginConfig.target,
        ])

        if (status) {
          throw new Error(output.join("\n"))
        }

        consola.success(
          consolaPrefix,
          "Files synced in ",
          Date.now() - start,
          "ms"
        )
      } catch (error) {
        consola.error(consolaPrefix, "Error syncing files", error)
      }
    },
  }
}

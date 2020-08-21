
import * as log from "https://deno.land/std/log/mod.ts";
import { Monitor } from "./monitor.ts";
import { token, chatIdForResults, url, everyXMinutes } from "./.env.ts"
export function startMonitoring() {


    log.info(`starting monitoring`)

    Monitor.checkURLsRegularly(chatIdForResults, [url], everyXMinutes, token)

}

startMonitoring()

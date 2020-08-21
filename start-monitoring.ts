
import * as log from "https://deno.land/std/log/mod.ts";
import { Monitor } from "./monitor.ts";

export function startMonitoring() {

    if (Deno.args.length !== 4) {
        throw new Error('I need 4 parameters, 1. chatId for results, 2. url to be monitored, 3. every x minutes, 4. telegram token')
    }

    const chatIdForResults = Number(Deno.args[0])
    const url = Deno.args[1]
    const everyXMinutes = Number(Deno.args[2])
    const token = Deno.args[3]

    log.info(`starting monitoring`)

    Monitor.checkURLsRegularly(chatIdForResults, [url], everyXMinutes, token)

}

startMonitoring()

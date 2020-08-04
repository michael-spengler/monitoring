import { fail } from "https://deno.land/std/testing/asserts.ts";
import { Monitor } from "https://raw.githubusercontent.com/michael-spengler/monitoring/master/monitor.ts";
// import { token } from "./topsecret/.env.ts";

const chatIdForResults = 176632339
const everyXMinutes = 1
const urlOfAnEndPointWhichIsAvailable = 'http://api.open-notify.org/iss-now.json'
const urlOfAnEndPointWhichIsNotAvailable = 'http://api.open-notify.org/iss-inFiveTrillionyears.json'

Deno.test("endpoint not available", async (): Promise<void> => {
    let intervalID
    
    try {
        intervalID = await Monitor.checkURLsRegularly(chatIdForResults, [urlOfAnEndPointWhichIsNotAvailable], everyXMinutes) // add your telegram bot token as parameter
        fail('An error was expected.')
    } catch(error) {
        // ok
    }
    
    clearInterval(intervalID)    
});

Deno.test("endpoint available", async (): Promise<void> => {
    let intervalID
    
    try {
        intervalID = await Monitor.checkURLsRegularly(chatIdForResults, [urlOfAnEndPointWhichIsAvailable], everyXMinutes) // add your telegram bot token as parameter
    } catch(error) {
        fail(`The following unexpected error occurred: ${error.message}`)
    }
    
    clearInterval(intervalID)    
});



import { Monitor } from "https://deno.land/x/request@1.3.0/request.ts"
// import { telegramBotToken } from './topsecret/.env.ts'

const chatIdForResults = 176632339
const url = 'http://api.open-notify.org/iss-now.json'
const everyXMinutes = 1
// commenting the following line as I should not publish my telegramBotToken :) 
// await Monitor.checkURLsRegularly(chatIdForResults, [url], everyXMinutes, telegramBotToken) 
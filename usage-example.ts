
import { Monitor } from "./monitor.ts"
import { token } from './topsecret/.env.ts'

const chatIdForResults = 176632339
const url = 'http://api.open-notify.org/iss-now.json'
const everyXMinutes = 1
// const telegramBotToken = token // commenting this out as I should not publish my token :) 
// await Monitor.checkURLRegularly(chatIdForResults, url, everyXMinutes, telegramBotToken) 
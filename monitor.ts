import { Request } from 'https://deno.land/x/request@1.1.0/request.ts'
import * as log from "https://deno.land/std/log/mod.ts";

export class Monitor {

	public static async checkURLsRegularly(chatIdForResults: number, urls: string[], everyXMinutes: number, telegramBotToken?: string): Promise<number> {

		let index = 0

		await Monitor.getIt(chatIdForResults, urls[index], telegramBotToken)

		const intervalId = setInterval(() => {
			index += 1
			if (index === urls.length) {
				index = 0
			}
			Monitor.getIt(chatIdForResults, urls[index], telegramBotToken)
		}, everyXMinutes * 60 * 1000)

		const getMeResult = (await Request.get(`https://api.telegram.org/bot${telegramBotToken}/getMe`)).result

		const text = `Congratulations. ${getMeResult.username} is handling monitoring for you.`

		log.info(text)

		await Monitor.sendMessage(chatIdForResults, text, telegramBotToken, false)

		return intervalId
	}

	private static async getIt(chatIdForResults: number, url: string, telegramBotToken?: string) {

		let result

		try {

			result = await Request.get(url)

			if (result === undefined) {
				Monitor.sendMessage(chatIdForResults, `unexpected response from: ${url}`, telegramBotToken)
			} else {
				log.info('checked successfully')
			}

		} catch (error) {
			console.log(error.message)
			await Monitor.sendMessage(chatIdForResults, error.message, telegramBotToken)
		}

	}

	private static async sendMessage(chatIdForResults: number, message: string, telegramBotToken?: string, itIsAnErrorMessage: boolean = true): Promise<void> {
		if (telegramBotToken !== undefined) {
			await Request.get(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatIdForResults}&text=${message}`)
		}
		if (itIsAnErrorMessage) {
			throw new Error(message)
		}

	}
}

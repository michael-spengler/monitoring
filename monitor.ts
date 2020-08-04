import { Request } from 'https://deno.land/x/request@1.0.0/request.ts'

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

		return intervalId
	}

	private static async getIt(chatIdForResults: number, url: string, telegramBotToken?: string) {

		let result

		try {

			result = await Request.get(url)

			if (result === undefined) {
				Monitor.reportAnError(chatIdForResults, `unexpected response from: ${url}`, telegramBotToken)
			}

		} catch (error) {
			console.log(error.message)
			await Monitor.reportAnError(chatIdForResults, error.message, telegramBotToken)
		}

	}

	private static async reportAnError(chatIdForResults: number, message: string, telegramBotToken?: string): Promise<void> {
		if (telegramBotToken !== undefined) {
			await Request.get(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatIdForResults}&text=${message}`)
		}
		throw new Error(message)
	}

}

import api from 'https://deno.land/x/api/index.ts'

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
		console.log('abc')

		let result

		try {

			result = await api.get(url)

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
			await api.get(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatIdForResults}&text=${message}`)
		}
		throw new Error(message)
	}

}

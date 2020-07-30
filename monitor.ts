import api from 'https://deno.land/x/api/index.ts'

export class Monitor {

	private static urlsBeingMonitored: string[] = []

	public static async checkURLRegularly(chatIdForResults: number, url: string, everyXMinutes: number, telegramBotToken?: string): Promise<number> {

		if (Monitor.urlsBeingMonitored.includes(url)) {
			throw new Error(`This url is already in the observation list: ${url}`)
		}

		this.urlsBeingMonitored.push(url)

		await Monitor.getIt(chatIdForResults, url, telegramBotToken)

		const intervalId = setInterval(() => {
			Monitor.getIt(chatIdForResults, url, telegramBotToken)
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

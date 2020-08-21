
## Usage Example for Your Code

This availability monitor sends notifications via telegram if an api / url is not available. You need to have a Telegram Bot registered via the [Telegram Botfather](https://t.me/BotFather).


```sh

deno run --allow-net start-monitoring.ts 176632339 http://api.open-notify.org/iss-now.json 1 yourtelegramsbottokenherekeepitsave

```

or via pm2

```sh

pm2 start  --interpreter="deno" --interpreter-args="run --allow-net" start-monitoring.ts 176632339 http://api.open-notify.org/iss-now.json 1 yourTelegramBotTokenHereKeepItSave

```

Explanation of parameters:  
1. ChatId (receiver of downtime alerts)  
2. URL to be monitored  
3. every X minutes 
4. Telegram Bot Token  


## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)

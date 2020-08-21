
## Usage Example for Your Code

This availability monitor sends notifications via telegram if an api / url is not available. You need to have a Telegram Bot registered via the [Telegram Botfather](https://t.me/BotFather).


```sh

deno run --allow-net start-monitoring.ts

```

or via pm2

```sh

git clone https://github.com/michael-spengler/monitoring.git
cd monitoring
cp .env-example.ts .env.ts // then add your individual ingredients
pm2 start  --interpreter="deno" --interpreter-args="run --allow-net" start-monitoring.ts

```

## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)

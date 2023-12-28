## Usage Example for Your Code

This availability monitor sends notifications via telegram if an api / url is not available. You need to have a Telegram Bot registered via the [Telegram Botfather](https://t.me/BotFather).


```sh

deno run --allow-net start-monitoring.ts

```

or via pm2

```sh

git clone https://github.com/michael-spengler/monitoring.git
cd monitoring
cp .env-example.ts .env.ts  # add your individual ingredients
pm2 start  --interpreter="deno" --interpreter-args="run --allow-net" start-monitoring.ts

```

## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.   
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)
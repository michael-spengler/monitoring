
## Usage Example for Your Code

This availability monitor sends notifications via telegram if an api / url is not available. You need to have a Telegram Bot registered via the [Telegram Botfather](https://t.me/BotFather).

```

import { Monitor } from "https://deno.land/x/moni/request.ts"
// import { telegramBotToken } from './topsecret/.env.ts'

const chatIdForResults = 176632339
const url = 'http://api.open-notify.org/iss-now.json'
const everyXMinutes = 1
// commenting the following line as I should not publish my telegramBotToken :) 
// await Monitor.checkURLsRegularly(chatIdForResults, [url], everyXMinutes, telegramBotToken)   

```



## Call usage example via command line
```
  
deno run --allow-net https://deno.land/x/monitoring/usage-example.ts
  
```

## Execute the tests
```  

deno test --allow-net https://deno.land/x/monitoring@1.2.0/test.ts
  
``` 
  
## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)

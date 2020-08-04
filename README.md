[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/monitoring/mod.ts)

<a target="__blank" href="https://brave.com/">
<img style="text-align: center" src="https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg" alt="drawing" width="220" />
</a>

## Usage Example for Your Code

This availability monitor sends notifications via telegram if an api is not available.  

```
  
import { Monitor } from "https://deno.land/x/monitoring@1.2.0/monitor.ts"
// import { token } from './topsecret/.env.ts'

const chatIdForResults = 176632339
const url = 'http://api.open-notify.org/iss-now.json'
const everyXMinutes = 1
// const telegramBotToken = token // commenting this out as I should not publish my token :) 
// await Monitor.checkURLsRegularly(chatIdForResults, [url], everyXMinutes, telegramBotToken)   
  
```



## Call usage example via command line
```
  
deno run --allow-net https://deno.land/x/monitoring@1.2.0/usage-example.ts
  
```

## Execute the tests
```  

deno test --allow-net https://deno.land/x/monitoring@1.2.0/test.ts
  
``` 
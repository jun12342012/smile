# smile-shop

> A Vue.js project

## Build Setup


## 5-filter
处理价格保留小数点后面2位数

```bash
import { toMoney } from '@/filter/moneyFilter.js'
filters:{
    moneyFilter (money) {
        return toMoney(money)
    }
},

moneyFilter.js
export function toMoney ( money = 0 ) {
    console.log ( money )
    return money.toFixed(2);
}
```
## 7-koa2
service目录存放服务端文件

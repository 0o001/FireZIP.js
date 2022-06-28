# FireZIP.js

```js

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '

console.log('text:', text, ',', 'length:', text.length)
console.log('encoded:', FireZIP.encode(text), ',', 'length:', FireZIP.encode(text).length)
console.log('decoded:', FireZIP.decode(FireZIP.encode(text)))

```

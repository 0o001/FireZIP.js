# FireZIP.js

```js

const testCases = ["hello", "merhaba dünya", "日本語", "123 !@#"];
for (const test of testCases) {
    const encoded = FireZIP.encode(test);
    const decoded = FireZIP.decode(encoded);
    console.log(`Original : "${test}"`);
    console.log(`Encoded  : "${encoded}"`);
    console.log(`Decoded  : "${decoded}"`);
    console.log(`Equal: ${decoded === test}`);
    console.log('---');
}

```

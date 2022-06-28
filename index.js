class FireZIP {
    static encode(text) {

        let base36 = toBigInt36(text);
        const perChunk = 4;
        let base36String = (base36).toString();
        let base36StringToArray = [...base36String];

        let base36ArrayToFill = fillArray(base36StringToArray, perChunk);

        let base36ArrayToChunk = chunk(base36ArrayToFill, perChunk);

        let unicodeString = '';

        for (const unicode of base36ArrayToChunk) {
            unicodeString += String.fromCodePoint(parseInt(unicode.join('')));
        }

        return unicodeString;

        function toBigInt36(text) {
            const multiplier = BigInt(Math.pow(36, 10));
            const chunks = text.match(/.{1,10}/g);
            let result = BigInt(0);
            chunks.forEach((chunk) => {
                result = result * multiplier + BigInt(parseInt(chunk, 36))
            });
    
            return result;
        }

        function chunk(array, perChunk) {
            return array.reduce((all,one,i) => {
                const ch = Math.floor(i/perChunk); 
                all[ch] = [].concat((all[ch]||[]),one); 
                return all
             }, [])
        }

        function fillArray(arr, value) {
            while (arr.length % 4 !== 0) {
              arr.push(value);
            }
            return arr;
          }
    }
    static decode(text) {
        let unicodeString = '';

        for (const unicode of text) {
            unicodeString += unicode.charCodeAt();
        }

        return unicodeString;
    }
}

class FireZIP {
    static encode(text) {
        const perChunk = 4;

        const bytes = new TextEncoder().encode(text);

        let bigInt = BigInt(0);
        for (const byte of bytes) {
            bigInt = (bigInt << BigInt(8)) | BigInt(byte);
        }

        let digits = bigInt.toString();
        let arr = [...digits];
        let filled = fillArray(arr, perChunk);
        let chunked = chunkArray(filled, perChunk);

        let unicodeString = '';
        for (const group of chunked) {
            unicodeString += String.fromCodePoint(parseInt(group.join('')));
        }
        return unicodeString;
    }

    static decode(encodedText) {
        let digits = '';

        for (const char of encodedText) {
            let code = char.codePointAt(0).toString();
            while (code.length < 4) code = '0' + code;
            digits += code;
        }

        digits = digits.replace(/^0+/, '');

        let bigInt = BigInt(digits);

        const bytes = [];
        while (bigInt > 0n) {
            bytes.unshift(Number(bigInt & BigInt(0xFF)));
            bigInt >>= BigInt(8);
        }

        return new TextDecoder().decode(new Uint8Array(bytes));
    }
}

function chunkArray(array, perChunk) {
    return array.reduce((all, one, i) => {
        const ch = Math.floor(i / perChunk);
        all[ch] = [].concat((all[ch] || []), one);
        return all;
    }, []);
}

function fillArray(arr, perChunk) {
    while (arr.length % perChunk !== 0) {
        arr.unshift('0');
    }
    return arr;
}

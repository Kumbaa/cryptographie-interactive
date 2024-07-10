function caesarCipher() {
    const input = document.getElementById('caesarInput').value.toUpperCase();
    const shift = parseInt(document.getElementById('caesarShift').value);
    const operation = document.getElementById('caesarOperation').value;
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            if (operation === 'encrypt') {
                charCode = ((charCode - 65 + shift) % 26) + 65;
            } else {
                charCode = ((charCode - 65 - shift + 26) % 26) + 65;
            }
        }
        result += String.fromCharCode(charCode);
    }
    document.getElementById('caesarResult').innerText = `Résultat : ${result}`;
}

function substitutionCipher() {
    const input = document.getElementById('subInput').value.toUpperCase();
    const operation = document.getElementById('subOperation').value;
    const key = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (operation === 'encrypt') {
            let index = input.charCodeAt(i) - 65;
            result += (index >= 0 && index < 26) ? key[index] : input[i];
        } else {
            let index = key.indexOf(input[i]);
            result += index >= 0 ? String.fromCharCode(65 + index) : input[i];
        }
    }
    document.getElementById('subResult').innerText = `Résultat : ${result}`;
}

function aesCipher() {
    const input = document.getElementById('aesInput').value;
    const key = document.getElementById('aesKey').value;
    const operation = document.getElementById('aesOperation').value;
    try {
        let result;
        if (operation === 'encrypt') {
            result = CryptoJS.AES.encrypt(input, key).toString();
        } else {
            result = CryptoJS.AES.decrypt(input, key).toString(CryptoJS.enc.Utf8);
        }
        document.getElementById('aesResult').innerText = `Résultat : ${result}`;
    } catch (error) {
        document.getElementById('aesResult').innerText = "Erreur. Vérifiez le message et la clé.";
    }
}

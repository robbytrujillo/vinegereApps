class VigenereCipher {
    private key: string;
  
    constructor(key: string) {
      this.key = key.toUpperCase();
    }
  
    private extendKey(text: string): string {
      let extendedKey = "";
      for (let i = 0, j = 0; i < text.length; i++) {
        if (/[A-Z]/.test(text[i])) {
          extendedKey += this.key[j % this.key.length];
          j++;
        } else {
          extendedKey += text[i];
        }
      }
      return extendedKey;
    }
  
    public encrypt(plainText: string): string {
      plainText = plainText.toUpperCase();
      const extendedKey = this.extendKey(plainText);
      let cipherText = "";
  
      for (let i = 0; i < plainText.length; i++) {
        if (/[A-Z]/.test(plainText[i])) {
          const charCode = ((plainText.charCodeAt(i) - 65 + (extendedKey.charCodeAt(i) - 65)) % 26) + 65;
          cipherText += String.fromCharCode(charCode);
        } else {
          cipherText += plainText[i];
        }
      }
      return cipherText;
    }
  
    public decrypt(cipherText: string): string {
      cipherText = cipherText.toUpperCase();
      const extendedKey = this.extendKey(cipherText);
      let plainText = "";
  
      for (let i = 0; i < cipherText.length; i++) {
        if (/[A-Z]/.test(cipherText[i])) {
          const charCode = ((cipherText.charCodeAt(i) - 65 - (extendedKey.charCodeAt(i) - 65) + 26) % 26) + 65;
          plainText += String.fromCharCode(charCode);
        } else {
          plainText += cipherText[i];
        }
      }
      return plainText;
    }
  }
  
  export default VigenereCipher
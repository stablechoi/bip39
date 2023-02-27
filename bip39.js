const bip39 = require('bip39');
var counters = 0;

while (counters < 10) {
  const mnemonic = bip39.generateMnemonic();
  if (mnemonic.length < 60) {
    console.log(mnemonic);
    counters++;
  }
}

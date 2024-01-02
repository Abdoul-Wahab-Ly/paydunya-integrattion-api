let paydunya = require("paydunya");
var setup = new paydunya.Setup({
  masterKey: "ufTLoqHv-6Qkl-sgFO-6pqG-B5olJ67urueu",
  privateKey: "test_private_C7QrvxFZr4Z10p0c3IYT4kALquw",
  publicKey: "test_public_F1grVbxY5fLrh9RYr39xcOSoukS",
  token: "pCrwQe3MFVUK084vjRlT",
  mode: "test", // Optionnel. Utilisez cette option pour les paiements tests.
});
var store = new paydunya.Store({
  name: "LyShopp", // only name is required
  tagline: "C'est le Bon Coin!",
  phoneNumber: "778622949",
  postalAddress: "Keur Massar - MTOA",
  logoURL: "http://www.chez-sandra.sn/logo.png",
});

module.exports = { setup, store };

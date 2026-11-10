/* Educational illustration only: no navigation, forms, or data collection. */
const examples = [
  "https://bank.example.test/login",
  "https://account.example.test/verify",
  "https://shop.example.test/checkout",
];

const urlDisplay = document.getElementById("exampleUrl");
const status = document.getElementById("status");
let currentExample = 0;

document.getElementById("nextExample").addEventListener("click", () => {
  currentExample = (currentExample + 1) % examples.length;
  // Use textContent so the sample is displayed strictly as text.
  urlDisplay.textContent = examples[currentExample];
  status.textContent = "Contoh berubah. Ini tetap hanya teks ilustrasi dan tidak mengubah alamat browser.";
});

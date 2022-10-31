// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

const brands = inventory.map((tvBrand) => {
   return tvBrand.brand
})
console.log(brands);

const tvBrands = document.getElementById("brands");
tvBrands.textContent = brands;
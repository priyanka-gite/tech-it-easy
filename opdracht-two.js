// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

const totalSale = (arr) => {
    let total = 0;
    for (let i = 0 ; i < arr.length ; i++){
        total += arr[i].sold;
        total++;
    }
    return total
}
console.log(`we sold  ${totalSale(inventory)} number of tv.`);

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const totSaleGreen = document.getElementById("totSaleGreen");
totSaleGreen.textContent = totalSale(inventory);

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

const totBought = (arr) => {
    let count = 0;
    for (let i = 0 ; i < arr.length ; i++ ) {
        count += arr[i].originalStock;
        count++;
           }
    return count;
}
    console.log(`we bought ${totBought(inventory)} number of tvs`);

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const totSaleBlue= document.getElementById("totSaleBlue");
totSaleBlue.textContent = totBought(inventory);

//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const remainingStock = totBought(inventory) - totalSale(inventory);
console.log(`there are ${remainingStock} number of tvs left`);

const inRed = document.getElementById("remainingRed");
inRed.textContent = remainingStock;
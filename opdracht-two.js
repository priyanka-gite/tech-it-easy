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

const totSale = document.getElementById("totSale")
totSale.textContent = totalSale(inventory);

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
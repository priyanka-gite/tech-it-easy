
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// defining function that takes array as parameter
const tvName = (array) => {
     let tvNamesBe = [];
    for (let i = 0 ; i < array.length ; i++) {
           tvNamesBe.push(array[i].name);
    }
    return tvNamesBe;
}
console.log(tvName(inventory));

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOutTv = (arr) => {
    const newSoldOut = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].originalStock === arr[i].sold) {
            newSoldOut.push(arr[i]);
        }
        }
        return newSoldOut;
}
    console.log (soldOutTv(inventory));

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const tvWithAmbilights = (arr) => {
    const hasAmbilights = [];
    for(let i = 0 ; i < arr.length ; i++){
        if (arr[i].options.ambiLight=== true){
            hasAmbilights.push(arr[i])
        }
    }
    return hasAmbilights;
}
console.log(tvWithAmbilights(inventory));

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
const num = inventory .sort((a,b) =>(a.price > b.price ? 1 : -1));
console.log(num);
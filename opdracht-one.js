
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


// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// const tvName = (array) => {
//      let tvNamesBe = [];
//     for (let i = 0 ; i < array.length ; i++) {
//            tvNamesBe.push(array[i].name);
//     }
//     return tvNamesBe;
// }
// console.log(tvName(inventory));

//map method itererts over length of array
//for every entry an anonymous function is carried on
//makes an new array on the basis of return statement
//parameter contains the full entry of that loop
//original array is not changed.

const tvNames = inventory.map((names)=>{
    return names.name
})
console.log(tvNames);

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// const soldOutTv = (arr) => {
//     const newSoldOut = [];
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i].originalStock === arr[i].sold) {
//             newSoldOut.push(arr[i]);
//         }
//         }
//         return newSoldOut;
// }
//     console.log (soldOutTv(inventory));

const soldOutTv = inventory.filter((soldOut)=>{
    if (soldOut.originalStock === soldOut.sold){
        return true;
    }
    return false
})
console.log(soldOutTv);

//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

// const tvWithAmbilights = (arr) => {
//     const hasAmbilights = [];
//     for(let i = 0 ; i < arr.length ; i++){
//         if (arr[i].options.ambiLight=== true){
//             hasAmbilights.push(arr[i])
//         }
//     }
//     return hasAmbilights;
// }
// console.log(tvWithAmbilights(inventory));

const tvWithAmbilight = inventory.filter((ambilights) => {
    if(ambilights.options.ambiLight == true){
        return true
    }
    return false;
})
console.log(tvWithAmbilight);

//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
// const num = inventory .sort((a,b) =>(a.price > b.price ? 1 : -1));
// console.log(num);

function sorted ( arr) {
  return   arr .sort((a,b) =>(a.price > b.price ? 1 : -1));
}

console.log(sorted(inventory));
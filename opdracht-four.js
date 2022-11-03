//Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)


// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

// a) create a function

const tvDetails = tv =>
    `${tv.brand} ${tv.type} - ${tv.name}` ;

// b)call the function we made
const oneTv = inventory.map(tvDetails);

console.log(oneTv[1]);


// Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
const priceOFTv = (tv) =>{
    return  ` €${tv.price},- `
}
const prices = inventory.map(priceOFTv);
console.log(prices[1]);

//
// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//
const screenSize = (tv) => {
    let result = ''; //reult is initialied to zero
    for (let i = 0 ; i < tv.availableSizes.length ; i++) {
        result += `${tv.availableSizes[i]} inch ${tv.availableSizes[i] * 2.54} cm |`;
    }
    // out of loop and return total;
    return result;
   }
   const sizes= inventory.map(screenSize);
console.log(sizes[1])
// Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
const tvDet = document.getElementById("tvDetails");
tvDet.innerText = oneTv[2];

const price = document.getElementById("priceOfTv");
price.innerText = prices[1];

const screen = document.getElementById("screenSize");
screen.innerHTML = sizes[4];

//Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

// function allTelevision(inputArr) {
//     const listOfTelevision = document.getElementById("allDetails")
//     inputArr.map((oneTv)=>{
//   listOfTelevision.innerHTML +=
//       <h2 id="tvDetails" className="color-Tv-Details"> ${tvDetails(oneTv)} </h2>
//         <h2 id="priceOfTv" className="color-price"> ${priceOFTv(oneTv)} </h2>
//         <h2 id="screenSize" className="color-screensize">   ${screenSize(oneTv)} </h2>
//
//     })
// }
// console.log(allTelevision(inventory));
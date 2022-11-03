//Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)


// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

// a) create a function

const tvDetails = name =>
    `${name.brand} ${name.type} - ${name.name}` ;

// b)call the function we made
const oneTv = inventory.map(tvDetails);

console.log(oneTv[1]);


// Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
const priceOFTv = (price) =>{
    return  ` €${price},- `
}

console.log(priceOFTv(356));

//
// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//
const screenSize = (arr) => {
    let total = ''; //total is initialied to zero
    for (let i = 0 ; i < arr.length ; i++) {
         total += `${arr[i]} inch ${arr[i] * 2.54} cm |`
//        initial value of total is empty;
//on first iteration value of total is 43 inch 109.22 cm;
//       on second iteration value of total is 50 inch 127 cm
//        on third iteration value of total is 55 inch 139.7 cm
//        on fourth iteration value of total is 58 inch 147.32 cm
//        iteration stopped
    }
    // out of loop and return total;
    return total;
   }
console.log(screenSize([43, 50, 55, 58]))

// Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
const tvDet = document.getElementById("tvDetails");
tvDet.innerText = oneTv[1];

const price = document.getElementById("priceOfTv");
price.innerText = priceOFTv(365);

const screen = document.getElementById("screenSize");
screen.innerHTML = screenSize([43, 50, 55, 58]);
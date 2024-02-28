import { CIPOLISTA } from "./adat.js";
import { hanykc, legdragabb, tipusok } from "./fuggveny.js";
import { felsorolasOsszeallit } from "./fuggveny.js";
import { divek } from "./fuggveny.js";
import { osszegezes } from "./fuggveny.js";
import { tablazat } from "./fuggveny.js";

console.log(CIPOLISTA)
tipusok(CIPOLISTA)

/* HTML Dom(Documentum Object Model)-ba irjuk ki a felsorolasba */
/* 1. megfoguk a html megfelelő elemét */
//const CIPOKELEM = document.getElementById("cipok");
const CIPOKELEM = document.querySelector("#cipok");
console.log(CIPOKELEM)

/* 2. öszeállítjuk a html kódot és */
let txt = felsorolasOsszeallit(CIPOLISTA)

/* 3. beletesszük az elembe */
CIPOKELEM.innerHTML="<h3>Szép nap van!</h3>"
CIPOKELEM.innerHTML+= txt;


/* divekbe kiírás */
const TERMEKEK= document.querySelector("#dives");
let szoveg = divek(CIPOLISTA)
TERMEKEK.innerHTML+=szoveg

/* tablazatba kiiras */
const TTERMEKEK = document.querySelector("#tablazatos");
let tartalom = tablazat(CIPOLISTA)
TTERMEKEK.innerHTML+=tartalom


/* siman kiiras */
const OSSZEGZES = document.querySelector("#osszegzes");
let ossz = osszegezes(CIPOLISTA)
OSSZEGZES.innerHTML+=`<p>A termékek össz ára: ${ossz}</p>`

const LEGDRAGABB =document.querySelector("#legdragabb");
let ldIndex = legdragabb(CIPOLISTA)
LEGDRAGABB.innerHTML+=`<p>A legdrágább termék neve: ${CIPOLISTA[ldIndex].tipus}</p>`

const KCIPODB =document.querySelector("#kcipodb");
let kcdb = hanykc(CIPOLISTA)
KCIPODB.innerHTML+= `Összesen ${kcdb}db Körömcipö van`
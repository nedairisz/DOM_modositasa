/// írd ki a konzolra cipolista tipuait! mehet mellé az ár is.

export function tipusok(lista){
    for (let i = 0; i < lista.length; i++){
        console.log(`A ${lista[i].tipus} cipő ára: ${lista[i].ar} ft.`)
    }
}

export function felsorolasOsszeallit(lista){
    let txt="<ul>"
    for (let i = 0; i < lista.length; i++){
        txt+= `<li> típus: ${lista[i].tipus}, ár: ${lista[i].ar}Ft. </li>`
    }
    txt += "</ul>"
    console.log(txt)
    return txt
}

export function divek(lista){
    let szoveg="<div id=dives>"
    for (let i = 0; i < lista.length; i++){
        szoveg+= `<div class=termek><h3> ${lista[i].tipus} </h3><p> ${lista[i].szin}</p><p> ${lista[i].ar}</p></div>`
    }
    szoveg += "</div>"
    console.log(szoveg)
    return szoveg
}

export function tablazat(lista){
    let tartalom="<div id=tablazatos>"
    tartalom+= `<th>Típus</tr><tr>Szín</tr><tr>Ár</th>`
    for (let i = 0; i < lista.length; i++){
        tartalom+= `<table><tr> <td>${lista[i].tipus}</td> <td>${lista[i].szin}</td> <td>${lista[i].ar}</td> <tr></table>`
    }
    tartalom += "</div>"
    console.log(tartalom)
    return tartalom
}

export function osszegezes(lista){
    let ossz = 0;
    for (let i = 0; i < lista.length; i++) {
        ossz+= lista[i].ar;
    }
    console.log(ossz)
    return ossz
}

export function legdragabb(lista){
    let ldIndex =0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[ldIndex].ar<lista[i].ar){
            ldIndex=i
        }
    }
    console.log(`A legdrágább ermék indexe: ${ldIndex}`)
    return ldIndex;
}

///hány körömcipő van?
export function hanykc(lista) {
    let kcdb = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].tipus === "Körömcipő") {
            kcdb += lista[i].meret.length;
        }
    }
    return kcdb;
}
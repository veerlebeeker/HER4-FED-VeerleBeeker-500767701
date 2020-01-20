/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/





// ==============
// FILTERS ACHTER FILTER ICON, OPEN EN DICHT KLAPPEN
// ==============

//Hier wordt het filter icon en de filters benoemd en gekoppeld aan de Classes binnen de HTML
var filterKlein = document.querySelector(".filtericon");
var filterGroot = document.querySelector(".filteropen");


//Wanneer er op het filter icon wordt geklikt, komen de filters te voorschijn. Wanneer er weer op wordt geklikt, verdwijnen ze weer
function click() {
  if (filterGroot.style.display === "none") {
    filterGroot.style.display = "block";
  } else {
    filterGroot.style.display = "none";
  }
}

//Met het klikken op het filer icon, wordt de functie click uitgevoerd
filterKlein.addEventListener('click', click);





// ==============
// WANNEER HET SCHERM BREDER IS DAN 768px, VERDWIJNEN DE FILTERS WEER DIE ACHTER HET FILTER ICON ZITTEN. 
//Dit heb ik gedaan omdat er anders dubbele filters in beeld stonden. Het filter icon verdwijnt namelijk zelf ook wanneer het scherm deze breedte bereikt. Dit gebeurt met media query is CSS, maar omdat de filters in javascript worden gebruikt, pakt hij de media query code niet in CSS. Daarom heb ik het op deze manier opgelost.
// ==============

function filters(x) {
  //Checkt of x gelijk is aan schermbreedte max-width: 768px
  if (x.matches) {
    //Als schermbreedte gelijk is, worden de filters weegegeven
    filterGroot.style.display = "block";
    //Als schermbreedte niet gelijk is, worden de filters niet weergegeven
  } else {
    filterGroot.style.display = "none";
  }
}

//De variable x wordt aangemaakt. Deze wordt gekoppeld window - max-width: 768px
var x = window.matchMedia("(max-width: 768px)");

//Hier wordt de function uitgevoert met variable x
filters(x);

//Deze regel checkt of er dingen veranderen. En voert function steeds opnieuw uit
x.addListener(filters);

//BRON: w3schools, 2019. geraadpleegd op 13/01/2020 vanhttps://www.w3schools.com/howto/howto_js_media_queries.asp





// ==============
// ANDERE CODE DIE IK HEB GEPROBEERD, MAAR NIET WERKTE
// Voor filter 'click'
// ==============

//var filterKlein = document.querySelector('.filtericon');
//var filterGroot = document.querySelector('.filteropen');
//
//filterKlein.addEventListener('click', animate);

//function animate() {
//  filterKlein.classList.toggle('active');
//  filterGroot.classList.toggle('active');
//}

//function animate() {
//    if ( filters.style.display == "" || filters.style.display == "none" ) {
//    filters.style.display = "block";
//}   
//    else {
//filters.style.display = "none";
//}


//var filterImage = document.getElementsByClassName('filtericon');
//
//var filters = document.getElementsByClassName('filteropgeklapt');
//
//filterImage.addEventListener("onclick", toggleFilter());
//
////function toggleFilter() {
////	if ( filters.style.display == "" || filters.style.display == "none" ) {
// //       filters.style.display = "block";
////	} else {
//	//	filters.style.display = "none";
////	}
////}
//
//function toggleFilter() {
//  if (filters.style.display === "none") {
//    filters.style.display = "block";
//  } else {
//    filters.style.display = "none";
//  }
// }

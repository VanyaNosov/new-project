

let dollarPrice = null;
function arrayJson (json) {
    console.log(json)
        for(var i = 0; i < json.length; i++){
            if(json[i].ccy === "USD"){
                dollarPrice = json[i].buy;
            };
        };
};

function conversion () {
    let number = document.getElementById("Converter").value;
    let dollar_conversion = document.getElementById("convertion_dollar").value = innerHTML = parseInt(dollarPrice) * parseInt(number);

    let sel = document.getElementById("menu");
    let options = document.getElementById("menu_block").value;
    console.log(options)
    
};

function funk () {
    let loader = document.getElementById("page-preloader").style.visibility = 'hidden';
}
setTimeout(funk,3000);



fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(res => res.json())
    .then(json => arrayJson(json));

conversion();



// let dollarPrice = null;
// function arrayJson (json) {
//         for(var i = 0; i < json.length; i++){
//             if(json[i].ccy === "USD"){
//                 dollarPrice = json[i].buy;
//             };
//         };
// };

// function conversion () {
//     let number = document.getElementById("Converter").value;
//     let dollar_conversion = document.getElementById("convertion_dollar").value = innerHTML = parseInt(dollarPrice) * parseInt(number);
// };






// fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
//     .then(res => res.json())
//     .then(json => arrayJson(json));

// conversion();



// async function functionSome () {
//     const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
  
// const json = await response.json();
// console.log(json)
 
// let dollarPrice = null;

//     for(var i = 0; i < json.length; i++){
//         if(json[i].ccy === "USD"){
//             dollarPrice = json[i].buy;
//         };
//     };
//     return dollarPrice;
// };


// async function conversion (dollarPrice) { 
//     const result = await functionSome();
//     let convertion = document.getElementById("Converter");
//     let dollar_conversion = document.getElementById("convertion_dollar").value = innerHTML = parseInt(dollarPrice) * parseInt(result);
//         console.log(dollar_conversion)
//         console.log(dollarPrice);
//         console.log(result);
       
// };





// async function functionSome () {
//     const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
  
// const json = await response.json();
// console.log(json)
 
// let dollarPrice = null;

//     for(var i = 0; i < json.length; i++){
//         if(json[i].ccy === "USD"){
//             dollarPrice = json[i].buy;
//         };
//     };
//     return dollarPrice;
// };


// async function conversion (dollarPrice) { 
//     const result = await functionSome();
//     console.log(result);
//     let convertion = document.getElementById("Converter");
//     let dollar_conversion = document.getElementById("convertion_dollar").value = innerHTML = parseInt(dollarPrice) * parseInt(result);
//         console.log(dollar_conversion)
//         console.log(dollarPrice);
//         console.log(result);
       
// };
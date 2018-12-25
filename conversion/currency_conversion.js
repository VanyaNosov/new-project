async function functionSome () {
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
  
const json = await response.json();
 
let vanya = null;

    for(var i = 0; i < json.length; i++){
        if(json[i].ccy === "USD"){
             vanya = json[i].buy;
        };
    };
    return vanya;
};


async function ght (vanya) { 
    const result = await functionSome();

    let convertion = document.getElementById("Converter");
        document.getElementById("convertion_dollar").innerHTML = parseInt(vanya) * parseInt(result);
        console.log(typeof vanya);
        console.log(result);
};




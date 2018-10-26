const memoryNamber = '0',
      memoryNewNumber = false,
      memory = '';

const field = document.getElementById('field');
const buttons = document.getElementsByClassName("characters");

document.addEventListener("click", function (w){
    if (field.value === "0") {
        field.value = w.target.textContent;
    } else {
        field.value += w.target.textContent;
    }
});

//function operation (op) {  
    //memorizeSymbol = field.value;

    //if (memoryNewNumber) {
        //field.value = memoryNamber;
    //} else {
        //memoryNewNumber = true;
        //if (memoryNamber === '+') {
            //memoryNamber += memorizeSymbol;
       // } else if (memoryNamber === '-') {
            //memoryNamber -= memorizeSymbol;
        //} else if (memoryNamber === '*') {
            //memoryNamber *= memorizeSymbol;
        //}  else if (memoryNamber === '/') {
            //memoryNamber /= memorizeSymbol;   
        //} else  (memoryNamber === '=') {
            //memoryNamber = memorizeSymbol
        //};

        //field.value = memoryNamber;
    //};
//};       

//document.getElementById("ro").addEventListener("click", function (w){
    //console.log(w.target.textContent);
    
//});

//document.getElementById("ro").addEventListener("click", function (w){
    //console.log(w.target.textContent);   
//});

//document.getElementById("ro").addEventListener("click", function (w){
    
    //console.log(w.target.textContent);
//});

//document.getElementById("ro").addEventListener("click", function (w){
    
    //console.log(w.target.textContent);
//});


//let nam = document.getElementById("field");
//nam.addEventListener("click", billlll);


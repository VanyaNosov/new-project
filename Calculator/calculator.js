  
class Сalculator {
    constructor() {
        this.field = document.getElementById("field"); 
        this.memoryCurrentNumber = 0; 
        this.memoreNewNumber = false;
        this.memoryPending = '';
        this.localOperationMemory = parseInt(this.field.value);
    }  
    
    getNum(number) {
      this.number = number;
    }

    plus() { 
        if (this.number) {         
            this.localOperationMemory += this.number;
          }         
        
}             
        
    minus() {   
        if (this.number) {
            this.localOperationMemory -= this.number;
          }         
    }

    point() {
        
    }

    result() {
        if (this.number) {
            this.field.value = this.localOperationMemory;  
        } 
    }

    multiplication() {          
            this.localOperationMemory *= this.number;   
    } 

    division() {
        if (this.number) {
            this.localOperationMemory /= this.number;
          }         
    }

    clear() {
        if (this.number) {
            this.field.value = this.number;
            this.localOperationMemory = this.memoryCurrentNumber;
          }         
          this.field.value = this.localOperationMemory;   
        
    }

    characters() {

    }

}


let user = new Сalculator();
const plus = document.getElementById("plus").addEventListener("click", () => {
  user.plus();
});

const minus = document.getElementById("minus").addEventListener("click", () => {
    user.minus();
  });

const division = document.getElementById("division").addEventListener("click", () => {
    user.division();
});  

const result = document.getElementById("result").addEventListener("click", () => {
    user.result();
  });

const multiplication = document.getElementById("multiplication").addEventListener("click", () => {
    user.multiplication();
});

const clear = document.getElementById("clear").addEventListener("click", () => {
    user.clear();
});

const numbers = document.getElementsByClassName("characters");
for(let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', (e) => {
    if(this.field.value === '0') {
        this.field.value = parseInt(e.target.textContent);
    }else {
        this.field.value += parseInt(e.target.textContent);
    };
  user.getNum(parseInt(e.target.textContent));  
});
} 


   






















 //   if(this.memoreNewNumber) {
        //     this.field.value = number;
        // }else {
        //     if(this.field.value ==='0') {
        //         this.field.value = number;
        //     }else {
        //         this.field.value +=  this.number;
    
        

    // this.localOperationMemory;
    //     if(this.memoreNewNumber) {
    //         this.field.value =  this.memoryCurrentNumber;
    //     }else {
    //         this.memoreNewNumber = true;
    //     }if (plus === '+') {
    //         this.memoryCurrentNumber += this.field.value; 





// class Сalculator {
//         constructor(calc) {
//             this.calc = document.getElementById("field").addEventListener('click');
//             this.calс = document.getElementById("plus").addEventListener("click");
//             this.calс = document.getElementById("minus").addEventListener("click");
//             this.calс = document.getElementById("multiplication").addEventListener("click");
//             this.calс = document.getElementById("division").addEventListener("click");
//             this.calс = document.getElementById("decimal").addEventListener("click");
//             this.calс = document.getElementById("result").addEventListener("click");  
//             this.calс = document.getElementById("clear").addEventListener("click");
//             this.calс_class = document.getElementsByClassName("characters");
//             for(let i = 0; i < this.calc_class.lenght; i++) {
//                 this.calc_class[i].addEventListener('click');
//             }
                           
//         }  
        
//         plus() { 
            
//         }

//         minus() {
    
//         }
    
//         point() {
    
//         }
    
//         result() {
    
//         }
    
//         multiplication() {
    
//         }
    
//         division() {
    
//         }
    
//         clear() {
            
//         }
    
//         characters() {
           
//         }
    
//     }
    
//     let user = new Сalculator(variable);



















// let input = document.getElementById("field");

// const variable = document.getElementsByClassName("characters");
// for(let i = 0; i < variable.length; i++) {
//     variable[i].addEventListener('click', function(e){  

        
// }
       
// function vanyaaa(variable) {
//     input.value +=  variable;
// }



    // console.log(e.target);
        // const value = e.target;
        // const some = value.innerHTML;
        // input = some;
        // console.log(input);
// const vanya = ["vin", 1, 2, 3, 4];
// for(let i = 0; i < vanya.length; i++) {
//     if(vanya[i] === ) {
//         console.log(vanya[i]);
//     }
// }

// const variable = document.getElementsByClassName("characters");
// for(let i = 0; i < variable.length; i++) {
//     variable[i].addEventListener('click', function(w){
        
//     });
// }





// function vanya(y) { 
//     y()    
//         if (i ===10) {
//             clearIterval(Ivan);
//      } 
// }
//   const Ivan = setInterval(function() {
//     console.log("Hello World");
//   }, 1000);
// vanya(Ivan);



 // const interval = setInterval(vanya, 1000);
// const variable = document.getElementByClassName("characters");
// for(let i = 0; i < variable.length; i++) {
//     variable[i].addEventListener('click');
// }
// console.log(variable);   
// class Сalculator {
//     constructor(calc) {
//         this.calc = calc
//     }

//     plus() { 
        
//     }

//     minus() {

//     }

//     point() {

//     }

//     result() {

//     }

//     multiplication() {

//     }

//     division() {

//     }

//     clear() {
        
//     }

//     characters() {
       
//     }

// }

// let user = new Сalculator(variable);


       // this.calс = document.getElementById("plus").addEventListener("click");
        // this.calс = document.getElementById("minus").addEventListener("click");
        // this.calс = document.getElementById("multiplication").addEventListener("click");
        // this.calс = document.getElementById("division").addEventListener("click");
        // this.calс = document.getElementById("decimal").addEventListener("click");
        // this.calс = document.getElementById("result").addEventListener("click");  
        // this.calс = document.getElementById("clear").addEventListener("click");
        //this.calс = document.getElementByClassName("characters");
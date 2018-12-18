// попробывать избавиться от лютых проверок
// backspace кнопка (стирает последний символ) 
// дополнительно - fortify landing добавить обнаружение операционной системы
// дополнительно - уличшить способо добавлиния EvenListener для операций

class Сalculator {
    constructor() {
        this.field = document.getElementById("field"); 
        this.firstArgument = '';
        this.secondArgument = '';
        this.argumentAfterPoint = '';
        this.operation = null;
        this.decimal = null;
        this.keyListener = e => {
            const { textContent } = e.target;
            
            if (
                (textContent === '.' && this.firstArgument.indexOf('.') > -1 && !this.secondArgument) ||
                (textContent === '.' && this.secondArgument.indexOf('.') > -1 && this.secondArgument) ||
                (this.field.value[this.field.value.length - 1] === '.' && textContent === '.')
            ) {
                return;
            }
            
            if (this.operation) {
                this.secondArgument += textContent;
            } else  {
                this.firstArgument += textContent;
            }
    
            if (this.field.value === '0' && textContent !== '.') {
                this.field.value = textContent;    
            } else {
                this.field.value += textContent;
            }
            
        }

        const numbers = document.getElementsByClassName("number");
        for(let i = 0; i < numbers.length; i++) {
            numbers[i].addEventListener('click', this.keyListener);
        }   

    }

    plus() {
        if (this.operation && this.operation !== '+') {
            this.operation = '+';
            this.field.value = this.field.value.slice(0, [this.field.value.length - 1]);
            this.field.value += '+';
        }

        if (!this.operation) {
            this.operation = '+';
            this.field.value += '+';
        }
    }             

    minus() {
        if (this.operation && this.operation !== '-') {
            this.operation = '-';
            this.field.value = this.field.value.slice(0, [this.field.value.length - 1]);
            this.field.value += '-';
        }

        if (!this.operation) {
            this.operation = '-';
            this.field.value += '-';
        }  
        // this.operation = '-';
        // this.field.value += ' - ';
    }

    multiplication() {
        if (this.operation && this.operation !== '×') {
            this.operation = '×';
            this.field.value = this.field.value.slice(0, [this.field.value.length - 1]);
            this.field.value += '×';
        }

        if (!this.operation) {
            this.operation = '×';
            this.field.value += '×';
        }          
        // this.operation = '×';
        // this.field.value += ' × ';
     } 

    division() {
        if (this.operation && this.operation !== '÷') {
            this.operation = '÷';
            this.field.value = this.field.value.slice(0, [this.field.value.length - 1]);
            this.field.value += '÷';
        }

        if (!this.operation) {
            this.operation = '÷';
            this.field.value += '÷';
        }
        // this.operation = '÷';
        // this.field.value += '÷';
        // console.log("fsdfdfdfdfdfdfd")
     }

    rate_x() {
        if (this.operation && this.operation !== 'X') {
            this.operation = 'X';
            this.field.value = this.field.value.slice(0, [this.field.value.length - 1]);
            this.field.value += 'X';
        }

        if (!this.operation) {
            this.operation = 'X';
            this.field.value += 'X';
        }
        // this.operation = 'x';
        // this.field.value += '  x  ';
    }

    root() {
        if (this.operation && this.operation !== '√') {
            this.operation = '√';
            this.field.value = this.field.value.slice(0, [this.field.value.length - 1]);
            this.field.value += '√';
        }

        if (!this.operation) {
            this.operation = '√';
            this.field.value += '√';
        }
        // this.operation = '√';
        // this.field.value += '  √  ';
        // console.log("fsdfdfdfdfdfdfd")
    }

    remainder() {
        if (this.operation && this.operation !== '%') {
            this.operation = '%';
            this.field.value = this.field.value.slice(0, [this.field.value.length - 1]);
            this.field.value += '%';
        }

        if (!this.operation) {
            this.operation = '%';
            this.field.value += '%';
        }
        // this.operation = '%';
        // this.field.value += '  %  ';
        // console.log("fsdfdfdfdfdfdfd")
    }



    result() {
        let result = 0;
  
        switch (this.operation) {
            case '+':
              result = parseFloat(this.firstArgument) + parseFloat(this.secondArgument);
              break;

            case '-':
              result = parseFloat(this.firstArgument) - parseFloat(this.secondArgument);
              break;

              case '×':
              result = (parseFloat(this.firstArgument) * parseFloat(this.secondArgument)).toFixed(2);
              break;

              case '÷':
               result = (Math.floor(this.firstArgument) / Math.floor(this.secondArgument)).toFixed(2);
            //   result = parseFloat(this.firstArgument) / parseFloat(this.secondArgument);
            //result = parseInt(this.firstArgument / this.secondArgument)
              break;

              case 'X':
              result = (Math.pow(this.firstArgument, this.secondArgument)).toFixed(2);
              break;

              case '√':
              result = (Math.sqrt(this.firstArgument)).toFixed(2);
              break;

              case '%':
              result = (parseFloat(this.firstArgument) % parseFloat(this.secondArgument)).toFixed(2);
              break;

            default:
              console.warn('Error')
        }
        this.field.value = result;
        this.operation = null;
        this.secondArgument = '';
        this.firstArgument = String(result);
    }

    clear() {
        this.field.value = 0;
        this.operation = null;
        this.secondArgument = '';
        this.firstArgument = ''
    }

    characters() {

    }

    lastOperation(lastOperation) {
      this.previousKeyType = lastOperation;
      console.log(this.previousKeyType)
        if(lastOperation === '+' || '-' || '×' || '÷'){
            
        }
    }

}


let user = new Сalculator();

[1, 2, 3].forEach((el) => {
    document.getElementById(el).addEventListener("click", (e) => {
        user.lastOperation(e.target.textContent)
        if (el === 'plus') {
            user.plus();
            return;
        }
        // user.plus();
    })
})

const plus = document.getElementById("plus").addEventListener("click", (e) => {
  user.lastOperation(e.target.textContent)
  user.plus();
});

const minus = document.getElementById("minus").addEventListener("click", (e) => {
  user.lastOperation(e.target.textContent)
  user.minus();
});

const division = document.getElementById("division").addEventListener("click", (e) => {
  user.lastOperation(e.target.textContent)
  user.division();
});  

const result = document.getElementById("result").addEventListener("click", (e) => {
  user.lastOperation(e.target.textContent)
  user.result();
});

const multiplication = document.getElementById("multiplication").addEventListener("click", (e) => {
  user.lastOperation(e.target.textContent)
  user.multiplication();
});

const clear = document.getElementById("clear").addEventListener("click", (e) => {
    user.lastOperation(e.target.textContent)
    user.clear();
  });

  document.getElementById("rate_x").addEventListener("click", (e) => {
    user.lastOperation(e.target.textContent)  
    user.rate_x()
  });
        
  document.getElementById("root").addEventListener("click", (e) => {
    user.lastOperation(e.target.textContent)  
    user.root()
  });

  document.getElementById("remainder").addEventListener("click", (e) => {
    user.lastOperation(e.target.textContent)  
    user.remainder()
  });

  
  document.getElementById("point").addEventListener("click", (e) => {
    user.keyListener(e);
  });


    // if (this.decimal && !this.operation) {
            //   this.argumentAfterPoint += e.target.textContent;
            // }


      // decimalOperation() {
    //     this.decimal = ".";
  
    //     if (!this.operation && this.firstArgument.length) {
    //       this.field.value = `${this.firstArgument}.${this.argumentAfterPoint}`;
    //       this.firstArgument = `${this.firstArgument}.${this.argumentAfterPoint}`;
    //       parseFloat(this.firstArgument);
    //       console.log(this.argumentAfterPoint)
    //       // this.decimal = null;
    //     }
    //     this.operation = null;

    //     if (this.secondArgument) {
    //         this.field.value = `${this.secondArgument}.${this.argumentAfterPoint}`;
    //         this.secondArgument = `${this.secondArgument}.${this.argumentAfterPoint}`;
    //         this.field.value += `${this.secondArgument}`;
    //       parseFloat(this.secondArgument);
    //     }
    // } 
        
    // decimalOperation() {
    //   this.decimal = ".";
    //   if (!this.operation && this.firstArgument.length) {
    //     this.field.value = `${this.firstArgument}.${this.argumentAfterPoint}`;
    //     this.firstArgument = `${this.firstArgument}.${this.argumentAfterPoint}`;
    //     parseFloat(this.firstArgument);
    //     // this.decimal = null;
    //   }
    // //   this.operation = null;

    //   if (this.secondArgument.length) {
    //     this.secondArgument = `${this.secondArgument}.${this.argumentAfterPoint}`;
    //     // this.field.value += `${this.secondArgument}`;
    //     parseFloat(this.secondArgument);
    //   }
 

    // }



// class Сalculator {
//     constructor() {
//         this.field = document.getElementById("field"); 
//         this.firstArgument = '';
//         this.secondArgument = '';
//         this.argumentAfterPoint = '';
//         this.operation = null;
//         this.decimal = null;
//         // this.lastOperation = null;
//         const numbers = document.getElementsByClassName("characters"); //characters это блок с моими цыфрами 
//         for(let i = 0; i < numbers.length; i++) {
//             numbers[i].addEventListener('click', (e) => {
//                 if (this.operation) {
//                     this.secondArgument += e.target.textContent;
//                 } else {
//                     this.firstArgument += e.target.textContent;
//                 }

//                 if (this.decimal) {
//                   this.argumentAfterPoint += e.target.textContent;
//                 }

//                 if (this.field.value === '0') {
//                     this.field.value = e.target.textContent;    
//                 }
//                 else {
//                     this.field.value += e.target.textContent;
//                 }
//             });
//         }   
//     }

//     plus() {
//         this.operation = '+';
//         this.field.value += ' + ';
//     }             
        
//     minus() {   
//         this.operation = '-';
//         this.field.value += ' - ';
//     }

//     multiplication() {          
//         this.operation = '*';
//         this.field.value += ' * ';
//     } 

//     division() {
//         this.operation = '/';
//         this.field.value += ' / ';
//     }

//     result() {
//         let result = 0;
  
//         switch (this.operation) {
//             case '+':
//               result = parseFloat(this.firstArgument) + parseFloat(this.secondArgument);
//               break;

//             case '-':
//               result = parseInt(this.firstArgument) - parseInt(this.secondArgument);
//               break;

//               case '*':
//               result = parseInt(this.firstArgument) - parseInt(this.secondArgument);
//               break;

//               case '/':
//               result = parseInt(this.firstArgument) - parseInt(this.secondArgument);
//               break;

//             default:
//               console.warn('Error')
//         }
//         this.field.value = result;
//         this.operation = null;
//         this.secondArgument = '';
//         this.firstArgument = result
//     }

//     clear() {
//         this.field.value = 0;
//         this.operation = null;
//         this.secondArgument = '';
//         this.firstArgument = ''
//     }

//     characters() {

//     }

//     decimalOperation() {
//       this.decimal = ".";

//       if (!this.operation && this.firstArgument.length) {
//         this.field.value = `${this.firstArgument}.${this.argumentAfterPoint}`;
//         this.firstArgument = `${this.firstArgument}.${this.argumentAfterPoint}`;
//         parseFloat(this.firstArgument);
//         this.decimal = null;
//       }
//       this.operation = null;

//       if (this.secondArgument.length) {
//         this.secondArgument = `${this.secondArgument}.${this.argumentAfterPoint}`;
//         this.field.value += `${this.secondArgument}`;
//         parseFloat(this.secondArgument);
//       }

//     }

//     // lastOperation() {
//     //       this.lastOperation = this.operation;
//     //     if (this.lastOperation) {
//     //         this.field.value = this.lastOperation;;
//     //     }
//     //   //this.previousKeyType
//     // }

// }


// let user = new Сalculator();

// const plus = document.getElementById("plus").addEventListener("click", (e) => {
//   user.lastOperation(e.target.textContent)
//   user.plus();
// });

// const minus = document.getElementById("minus").addEventListener("click", (e) => {
//   user.lastOperation(e.target.textContent)
//   user.minus();
// });

// const division = document.getElementById("division").addEventListener("click", (e) => {
//   user.lastOperation(e.target.textContent)
//   user.division();
// });  

// const result = document.getElementById("result").addEventListener("click", (e) => {
//   user.lastOperation(e.target.textContent)
//   user.result();
// });

// const multiplication = document.getElementById("multiplication").addEventListener("click", (e) => {
//   user.lastOperation(e.target.textContent)
//   user.multiplication();
// });


// const clear = document.getElementById("clear").addEventListener("click", (e) => {
//   user.lastOperation(e.target.textContent)
//   user.clear();
// });

// document.getElementById("point").addEventListener("click", (e) => {
//   user.lastOperation(e.target.textContent)
//   user.decimalOperation();
// });









// class Сalculator {
//     constructor() {
//         this.field = document.getElementById("field"); 
//         this.firstArgument = '';
//         this.secondArgument = '';
//         this.poiintNum = '';
//         this.poiintNumTwo = '';
//         this.operation = null;

//         const numbers = document.getElementsByClassName("characters");
//         for(let i = 0; i < numbers.length; i++) {
//             numbers[i].addEventListener('click', (e) => {
//                 if (this.operation) {
//                     this.secondArgument += e.target.textContent;
//                 } else {
//                     this.firstArgument += e.target.textContent;
//                 }

//                 if (this.operation) {
//                     this.secondArgument += this.poiintNum;
//                 } else {
//                     this.firstArgument += this.poiintNumTwo;
//                 }

//                 if (this.field.value === '0') {
//                     this.field.value = e.target.textContent;    
//                 } else {
//                     this.field.value +=  e.target.textContent;
//                 }
//             });

//         } 
        
        
     
//     }

//     plus() {  
//         this.operation = '+';
//         this.field.value += ' + '; 
//         if(this.field.value = '+') {
//             this.operation - 1;
//         }
// }    
//     minus() {   
//         this.operation = '-';
//         this.field.value += ' - ';
//     }

//     point() {
//         this.operation = '.';
//         this.field.value += ' . ';
//     }

//     result() {
//         let result = 0;

//         switch (this.operation) {
//             case '+':
//                 result = parseInt(this.firstArgument) + parseInt(this.secondArgument);
//               break;

//             case '-':
//                 result = parseInt(this.firstArgument) - parseInt(this.secondArgument);

            
//             case '.':
                
                
//                 // if(parseInt(this.firstArgument)) {
//                 //     result = '0.';
//                 // }else {
//                 //     if(result.indexOf('.') === -1) {
//                 //         parseInt(this.firstArgument) += '.';
//                 //     }   
//                 // };

//               break;

//             default:
//               console.warn('Error')
//         }
//         this.field.value = result;
//         this.operation = null;
//         this.secondArgument = '';
//         this.firstArgument = result
//     }

//     clear() {
//         this.field.value = 0;
//         this.operation = null;
//         this.secondArgument = '';
//         this.firstArgument = ''
//     }

//     characters() {

//     }

// }
// let user = new Сalculator();

// const plus = document.getElementById("plus").addEventListener("click", () => {
//     user.plus();
// });

// const minus = document.getElementById("minus").addEventListener("click", () => {
//     user.minus();
//   });

// const division = document.getElementById("division").addEventListener("click", () => {
//     user.division();
// });  

// const result = document.getElementById("result").addEventListener("click", () => {
//     user.result();
//   });

// const multiplication = document.getElementById("multiplication").addEventListener("click", () => {
//     user.multiplication();
// });

// const clear = document.getElementById("clear").addEventListener("click", () => {
//     user.clear();
// });

// const point = document.getElementById("point").addEventListener("click", () => {
//     user.point();
// });
 












    // multiplication() {          
    //     this.memoreNewNumber = true;
    //     this.field.value = `${this.number} * `;
    //     if (this.number) {         
    //         this.localOperationMemory *= this.number;
    //       }  
    //       return this.localOperationMemory; 
    // } 

    // division() {
    //     this.memoreNewNumber = true;
    //     this.field.value = `${this.number} / `;
    //     if (this.number) {         
    //        this.localOperationMemory /= this.number;
    //       }    
    //     return this.localOperationMemory; 
    // }


// //вообщем как я понял не 1 из моих методов не задействован, все делает равно, оно просо берет числа и слаживает их , не смотря на чы они задействованы в контексте plus минус пофиг , будет происходить сложение .

// class Сalculator {
//     constructor() {
//         this.field = document.getElementById("field"); 
//         this.number = 0;
//         this.memoryCurrentNumber = 0; 
//         this.memoreNewNumber = false;
//         this.memoryPending = '';
//         this.localOperationMemory = parseInt(this.field.value);

//         const numbers = document.getElementsByClassName("characters"); //characters это блок с моими цыфрами 
//         for(let i = 0; i < numbers.length; i++) {
//             numbers[i].addEventListener('click', (e) => {
//                 if (this.memoreNewNumber) {
//                     if (!this.memoryCurrentNumber) {
//                         this.memoryCurrentNumber = e.target.textContent;
//                     } else {
//                         this.memoryCurrentNumber = `${this.memoryCurrentNumber}${e.target.textContent}`;
//                     }
//                 } else {
//                     if (!this.number) {
//                         this.number = parseInt(e.target.textContent);
//                     } else {
//                         this.number = parseInt(`${this.number}${e.target.textContent}`);
//                     }
//                 }

//                 if(this.field.value === '0') {
//                     this.field.value = e.target.textContent;
//                 } else {
//                     this.field.value = `${this.field.value}${e.target.textContent}`;
//                 };
//             });
          
//         }
        
//     }  
    
//     getNum(number) {
//       this.number = number;
//     }

//     plus() {
//         this.memoreNewNumber = true;
//         this.field.value = `${this.number}  + `;
//             if (this.number) {         
//                 this.localOperationMemory += this.number;
//           }
//           return this.localOperationMemory; 
        
// }             
        
//     minus() {   
//         this.memoreNewNumber = true;
//         this.field.value = `${this.number} - `;
//         if (this.number) {         
//             this.localOperationMemory -= this.number;
//           }  
//           return this.localOperationMemory; 
                    
//     }

//     multiplication() {          
//         this.memoreNewNumber = true;
//         this.field.value = `${this.number} * `;
//         if (this.number) {         
//             this.localOperationMemory *= this.number;
//           }  
//           return this.localOperationMemory; 
//     } 

//     division() {
//         this.memoreNewNumber = true;
//         this.field.value = `${this.number} / `;
//         if (this.number) {         
//            this.localOperationMemory /= this.number;
//           }    
//         return this.localOperationMemory; 
//     }

//     result() {       
//         const plusResult = this.plus();
//         const minusResult = this.minus();
//         // const  multiplicationResult = this.multiplication();
//         // const divisionResult = this.division();
//         let finallyResult;

//         //    if (multiplicationResult) {
//         //     finallyResult = parseInt(this.number) * parseInt(this.memoryCurrentNumber);          
//         //     this.field.value = finallyResult;
//         //     this.localOperationMemory = finallyResult
//         // }

//         if (minusResult) {
//             finallyResult = parseInt(this.number) - parseInt(this.memoryCurrentNumber);
//             this.field.value = finallyResult;
//             this.localOperationMemory = finallyResult
//         }

//         if (plusResult) {
//             finallyResult = parseInt(this.number) + parseInt(this.memoryCurrentNumber);          
//             this.field.value = finallyResult;
//             this.localOperationMemory = finallyResult
//         }

//         // if (divisionResult) {
//         //     finallyResult = parseInt(this.number) / parseInt(this.memoryCurrentNumber);          
//         //     this.field.value = finallyResult;
//         //     this.localOperationMemory = finallyResult
//         // }



//     }

//     clear() {
//         if (this.number) {
//             this.field.value = this.number;
//             this.localOperationMemory = this.memoryCurrentNumber;
//           }         
//           this.field.value = this.localOperationMemory;   
        
//     }

//     characters() {

//     }

// }


// let user = new Сalculator();
// const plus = document.getElementById("plus").addEventListener("click", () => {
//   user.plus();
// });

// const minus = document.getElementById("minus").addEventListener("click", () => {
//     user.minus();
//   });

// const division = document.getElementById("division").addEventListener("click", () => {
//     user.division();
// });  

// const result = document.getElementById("result").addEventListener("click", () => {
//     user.result();
//   });

// const multiplication = document.getElementById("multiplication").addEventListener("click", () => {
//     user.multiplication();
// });

// const clear = document.getElementById("clear").addEventListener("click", () => {
//     user.clear();
// });
 
 





        // if(parseInt(this.number) + parseInt(this.memoryCurrentNumber)) {
        //     this.memoryPending = plusResult;
        //     console.log(this.memoryPending);
        // }

        // if (this.result()) {
        //     this.memoryPending = finallyResult;
            
        // }

        // if (plusResult) {
        //     this.memoryPending = finallyResult;
        //     console.log(this.memoryPending)
        // }


            // if (finallyResult) {
            //     this.localOperationMemory = finallyResult;

            // }    
            // if (memoryResult) {
            //     this.memoryPending =  finallyResult; 
            // }
            // console.log(finallyResult);
            // finallyResult = memoryResult ;           
        

       


// class Сalculator {
//     constructor() {
//         this.field = document.getElementById("field"); 
//         this.memoryCurrentNumber = 0; 
//         this.memoreNewNumber = false;
//         this.memoryPending = '';
//         this.localOperationMemory = parseInt(this.field.value);
//     }  
    
//     getNum(number) {
//       this.number = number;
//     }

//     plus() { 
//         if (this.number) {         
//             this.localOperationMemory += this.number;
//           }         
        
// }             
        
//     minus() {   
//         if (this.number) {
//             this.localOperationMemory -= this.number;
//           }         
//     }

//     point() {
        
//     }

//     result() {
//         if (this.number) {
//             this.field.value = this.localOperationMemory;  
//         } 
//     }

//     multiplication() {          
//             this.localOperationMemory *= this.number;   
//     } 

//     division() {
//         if (this.number) {
//             this.localOperationMemory /= this.number;
//           }         
//     }

//     clear() {
//         if (this.number) {
//             this.field.value = this.number;
//             this.localOperationMemory = this.memoryCurrentNumber;
//           }         
//           this.field.value = this.localOperationMemory;   
        
//     }

//     characters() {

//     }

// }


// let user = new Сalculator();
// const plus = document.getElementById("plus").addEventListener("click", () => {
//   user.plus();
// });

// const minus = document.getElementById("minus").addEventListener("click", () => {
//     user.minus();
//   });

// const division = document.getElementById("division").addEventListener("click", () => {
//     user.division();
// });  

// const result = document.getElementById("result").addEventListener("click", () => {
//     user.result();
//   });

// const multiplication = document.getElementById("multiplication").addEventListener("click", () => {
//     user.multiplication();
// });

// const clear = document.getElementById("clear").addEventListener("click", () => {
//     user.clear();
// });

// const numbers = document.getElementsByClassName("characters");
// for(let i = 0; i < numbers.length; i++) {
//   numbers[i].addEventListener('click', (e) => {
//     if(this.field.value === '0') {
//         this.field.value = parseInt(e.target.textContent);
//     }else {
//         this.field.value += parseInt(e.target.textContent);
//     };
//   user.getNum(parseInt(e.target.textContent));  
// });
// } 


   






















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
const cats = [ "Milo", "Otis", "Garfield" ];

 function destructivelyAppendCat() {
     cats.push("Ralph");
 }

 function destructivelyPrependCat()  {
      cats.unshift("Bob");
 }

 function destructivelyRemoveLastCat() {
     cats.pop();
 }
  
 function destructivelyRemoveFirstCat(){
      cats.shift();
 }

 function appendCat() {
     const copyCats = [...cats, "Broom"];
     return copyCats
 }

 function prependCat() {
     const copyCats2 = ["Arnold", ...cats];
     return copyCats2
 }

 function removeLastCat() {
     const copyCats3 = cats.slice(0, cats.length -1);
     return copyCats3
    }

 function removeFirstCat() { 
     const copyCats4 = cats.slice(1);
     return copyCats4
    }
  

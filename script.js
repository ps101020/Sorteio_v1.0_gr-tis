//escolha de numeros de 1 a 50;

// por padrão a opção 1 a 10 ja vem habilitada;



let habilit = localStorage.getItem("valor;");

let r = document.querySelector(".r");



if(localStorage.getItem("ganhador") == null && localStorage.getItem("sorte") == null) {
    r=""
}

else {
 r.innerText=` último resultado ${localStorage.getItem("sorte")} || ganhador: ${localStorage.getItem("ganhador")}`   
}

let s = document.querySelector(".s");

let erro = document.querySelector(".erro");



let umAdez = document.querySelector(".umAdez");


let umAvinte = document.querySelector(".umAvinte");



let umAtrinta = document.querySelector(".umAtrinta")
let umAquarenta = document.querySelector(".umAquarenta")
let umAcinquenta = document.querySelector(".umAcinquenta");




// funções de memorização de valor;

if(localStorage.getItem("valor")== null) {
    dez();
}

if(localStorage.getItem("valor")== 11) {
    dez();
}

if(localStorage.getItem("valor")== 21) {
    vinte();
}

if(localStorage.getItem("valor")== 31) {
    trinta();
}

if(localStorage.getItem("valor")== 41) {
    quarenta();
}

if(localStorage.getItem("valor")== 51) {
    cinquenta();
}

//



function dez() { 
habilit = localStorage.valor=parseInt(11);

   umAdez.style="background-color : yellow"
   document.querySelector(".bloco1").hidden=false; document.querySelector(".bloco2").hidden=true;
  document.querySelector(".bloco3").hidden=true;  
    document.querySelector(".bloco4").hidden=true;
  document.querySelector(".bloco5").hidden=true;  
    
     umAvinte.style="background-color : whitesmoke"
      umAtrinta.style="background-color : whitesmoke"
      
      umAquarenta.style="background-color: whitesmoke"
      
      umAcinquenta.style="background-color: whitesmoke;"
      
      }

function vinte() {

localStorage.valor=parseInt(21);

 umAvinte.style="background-color : yellow"
 
 umAdez.style="background-color : whitesmoke"
 umAtrinta.style="background-color : whitesmoke"
 
 umAquarenta.style="background-color: whitesmoke"
 
  umAcinquenta.style="background-color: whitesmoke;"
 document.querySelector(".bloco1").hidden=false;
 document.querySelector(".bloco2").hidden=false; document.querySelector(".bloco3").hidden=true;  
    document.querySelector(".bloco4").hidden=true;
  document.querySelector(".bloco5").hidden=true;
   
}

function trinta() {

localStorage.valor=parseInt(31);

 umAtrinta.style="background-color : yellow"
 
 umAdez.style="background-color : whitesmoke"
 umAvinte.style="background-color: whitesmoke"

umAquarenta.style="background-color: whitesmoke"

  umAcinquenta.style="background-color: whitesmoke;"


document.querySelector(".bloco1").hidden=false;
 document.querySelector(".bloco2").hidden=false; document.querySelector(".bloco3").hidden=false;  
    document.querySelector(".bloco4").hidden=true;
  document.querySelector(".bloco5").hidden=true;
     
}

function quarenta() {

localStorage.valor=parseInt(41);

 umAquarenta.style="background-color : yellow"
 
 umAdez.style="background-color : whitesmoke"
 
 umAvinte.style="background-color : whitesmoke"
 
 
 
 umAtrinta.style="background-color : whitesmoke"
 
umAcinquenta.style="background-color : whitesmoke"

document.querySelector(".bloco1").hidden=false;
 document.querySelector(".bloco2").hidden=false; document.querySelector(".bloco3").hidden=false;  
    document.querySelector(".bloco4").hidden=false;
  document.querySelector(".bloco5").hidden=true;
}

function cinquenta() {

localStorage.valor=parseInt(51);

 umAcinquenta.style="background-color : yellow"
 
 umAdez.style="background-color : whitesmoke"
 umAvinte.style="background-color: whitesmoke"

umAquarenta.style="background-color: whitesmoke"

  umAtrinta.style="background-color: whitesmoke;"
 
 document.querySelector(".bloco1").hidden=false;
 document.querySelector(".bloco2").hidden=false; document.querySelector(".bloco3").hidden=false;  
    document.querySelector(".bloco4").hidden=false;
  document.querySelector(".bloco5").hidden=false;
}






//n1
let nome1 = localStorage.getItem('nome1');
console.log(nome1);


    


 if(nome1 != null) {
     let n1 = document.querySelector(".n1");
     n1.style="background-color:yellowgreen;"
 }
 
 
function n1() {


if(nome1==null) {
  localStorage.nome1=window.prompt("insira o nome")
localStorage.numero=1;


let nome1 = localStorage.getItem('nome1');


document.querySelector(".n1").value=""


 if(nome1=="") {
  alert("escreva um nome válido");
}


else if(nome1 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}



if(nome1 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome1}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome1=window.prompt("insira o nome")
localStorage.numero=1;


let nome1 = localStorage.getItem('nome1');


document.querySelector(".n1").value=""


 if(nome1=="") {
  alert("escreva um nome válido");
}


else if(nome1 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }



//n2


let nome2 = localStorage.getItem('nome2');
console.log(nome2);


    


 if(nome2 != null) {
     let n2 = document.querySelector(".n2");
     n2.style="background-color:yellowgreen;"
 }
 
 
function n2() {


if(nome2==null) {
  localStorage.nome2=window.prompt("insira o nome")
localStorage.numero=2;


let nome2 = localStorage.getItem('nome2');


document.querySelector(".n2").value=""


 if(nome2=="") {
  alert("escreva um nome válido");
}


else if(nome2 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}



if(nome2 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome2}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome2=window.prompt("insira o nome")
localStorage.numero=2;


let nome2 = localStorage.getItem('nome2');


document.querySelector(".n2").value=""


 if(nome2=="") {
  alert("escreva um nome válido");
}


else if(nome2 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }







//n3
let nome3 = localStorage.getItem('nome3');
console.log(nome3);

 if(nome3 != null) {
     let n3 = document.querySelector(".n3");
     n3.style="background-color:yellowgreen;"
 }
 
 
function n3() {


if(nome3==null) {
  localStorage.nome3=window.prompt("insira o nome")
localStorage.numero=3;

let nome3 = localStorage.getItem('nome3');


document.querySelector(".n3").value=""


 if(nome3=="") {
  alert("escreva um nome válido");
}


else if(nome3 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}



if(nome3 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome3}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome3=window.prompt("insira o nome")
localStorage.numero=3;


let nome3 = localStorage.getItem('nome3');


document.querySelector(".n3").value=""


 if(nome3=="") {
  alert("escreva um nome válido");
}


else if(nome3 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }








//n4
let nome4 = localStorage.getItem('nome4');
console.log(nome4);

 if(nome4 != null) {
     let n4 = document.querySelector(".n4");
     n4.style="background-color:yellowgreen;"
 }
 
 
function n4() {


if(nome4==null) {
  localStorage.nome4=window.prompt("insira o nome")
localStorage.numero=4;

let nome4 = localStorage.getItem('nome4');


document.querySelector(".n4").value=""


 if(nome4=="") {
  alert("escreva um nome válido");
}


else if(nome4 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}



if(nome4 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome4}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome4=window.prompt("insira o nome")
localStorage.numero=4;


let nome4 = localStorage.getItem('nome4');


document.querySelector(".n4").value=""


 if(nome4=="") {
  alert("escreva um nome válido");
}


else if(nome4 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }








//n5
let nome5 = localStorage.getItem('nome5');
console.log(nome5);

 if(nome5!= null) {
     let n5 = document.querySelector(".n5");
     n5.style="background-color:yellowgreen;"
 }
 
 
function n5() {


if(nome5==null) {
  localStorage.nome5=window.prompt("insira o nome")
localStorage.numero=5;

let nome5 = localStorage.getItem('nome5');


document.querySelector(".n5").value=""


 if(nome5=="") {
  alert("escreva um nome válido");
}


else if(nome5 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}


if(nome5 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome5}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome5=window.prompt("insira o nome")
localStorage.numero=5;


let nome5 = localStorage.getItem('nome5');


document.querySelector(".n5").value=""


 if(nome5=="") {
  alert("escreva um nome válido");
}


else if(nome5 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }





    



//n6
let nome6 = localStorage.getItem('nome6');
console.log(nome6);

 if(nome6 != null) {
     let n6 = document.querySelector(".n6");
     n6.style="background-color:yellowgreen;"
 }
 
 
function n6() {


if(nome6==null) {
  localStorage.nome6=window.prompt("insira o nome")
localStorage.numero=6;

let nome6 = localStorage.getItem('nome6');


document.querySelector(".n6").value=""


 if(nome6=="") {
  alert("escreva um nome válido");
}


else if(nome6 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}


if(nome6 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome6}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome6=window.prompt("insira o nome")
localStorage.numero=6;


let nome6 = localStorage.getItem('nome6');


document.querySelector(".n6").value=""


 if(nome6=="") {
  alert("escreva um nome válido");
}


else if(nome6 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }







//n7
let nome7 = localStorage.getItem('nome7');
console.log(nome7);

 if(nome7 != null) {
     let n7 = document.querySelector(".n7");
     n7.style="background-color:yellowgreen;"
 }
 
 
function n7() {


if(nome7==null) {
  localStorage.nome7=window.prompt("insira o nome")
localStorage.numero=7;

let nome7 = localStorage.getItem('nome7');


document.querySelector(".n7").value=""


 if(nome7=="") {
  alert("escreva um nome válido");
}


else if(nome7 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}


if(nome7 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome7}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome7=window.prompt("insira o nome")
localStorage.numero=7;


let nome7 = localStorage.getItem('nome7');


document.querySelector(".n7").value=""


 if(nome7=="") {
  alert("escreva um nome válido");
}


else if(nome7 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }







//n8
let nome8 = localStorage.getItem('nome8');
console.log(nome8);

 if(nome8 != null) {
     let n8 = document.querySelector(".n8");
     n8.style="background-color:yellowgreen;"
 }
 
 
function n8() {


if(nome8==null) {
  localStorage.nome8=window.prompt("insira o nome")
localStorage.numero=8;

let nome8 = localStorage.getItem('nome8');


document.querySelector(".n8").value=""


 if(nome8=="") {
  alert("escreva um nome válido");
}


else if(nome8 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}

if(nome8 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome8}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome8=window.prompt("insira o nome")
localStorage.numero=8;


let nome8 = localStorage.getItem('nome8');


document.querySelector(".n8").value=""


 if(nome8=="") {
  alert("escreva um nome válido");
}


else if(nome8 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }






//n9
let nome9 = localStorage.getItem('nome9');
console.log(nome9);

 if(nome9 != null) {
     let n9 = document.querySelector(".n9");
     n9.style="background-color:yellowgreen;"
 }
 
 
function n9() {


if(nome9==null) {
  localStorage.nome9=window.prompt("insira o nome")
localStorage.numero=9;

let nome9 = localStorage.getItem('nome9');


document.querySelector(".n9").value=""


 if(nome9=="") {
  alert("escreva um nome válido");
}


else if(nome9 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}



if(nome9 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome9}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome9=window.prompt("insira o nome")
localStorage.numero=9;


let nome9 = localStorage.getItem('nome9');


document.querySelector(".n9").value=""


 if(nome9=="") {
  alert("escreva um nome válido");
}


else if(nome9 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }









//n10
let nome10 = localStorage.getItem('nome10');
console.log(nome4);

 if(nome10 != null) {
     let n10 = document.querySelector(".n10");
     n10.style="background-color:yellowgreen;"
 }
 
 
function n10() {


if(nome10==null) {
  localStorage.nome10=window.prompt("insira o nome")
localStorage.numero=10;

let nome10 = localStorage.getItem('nome10');


document.querySelector(".n10").value=""


 if(nome10=="") {
  alert("escreva um nome válido");
}


else if(nome10 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}

if(nome10 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome10}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome10=window.prompt("insira o nome")
localStorage.numero=10;


let nome10 = localStorage.getItem('nome10');


document.querySelector(".n10").value=""


 if(nome10=="") {
  alert("escreva um nome válido");
}


else if(nome10 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }






    
    //n11 ao n20
   

 //n11
let nome11 = localStorage.getItem('nome11');
console.log(nome11);

 if(nome11 != null) {
     let n11 = document.querySelector(".n11");
     n11.style="background-color:yellowgreen;"
 }
 
 
function n11() {


if(nome11==null) {
  localStorage.nome11=window.prompt("insira o nome")
localStorage.numero=11;

let nome11 = localStorage.getItem('nome11');


document.querySelector(".n11").value=""


 if(nome11=="") {
  alert("escreva um nome válido");
}

else if(nome11 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}


if(nome11 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome11}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome11=window.prompt("insira o nome")
localStorage.numero=11;


let nome11 = localStorage.getItem('nome11');


document.querySelector(".n11").value=""


 if(nome11=="") {
  alert("escreva um nome válido");
}


else if(nome11 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }









//n12
let nome12 = localStorage.getItem('nome12');
console.log(nome2);

 if(nome12 != null) {
     let n12 = document.querySelector(".n12");
     n12.style="background-color:yellowgreen;"
 }
 
 
function n12() {


if(nome12==null) {
  localStorage.nome12=window.prompt("insira o nome")
localStorage.numero=12;

let nome12 = localStorage.getItem('nome12');


document.querySelector(".n12").value=""


 if(nome12=="") {
  alert("escreva um nome válido");
}


else if(nome12 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}



if(nome12 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome12}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome12=window.prompt("insira o nome")
localStorage.numero=12;


let nome12 = localStorage.getItem('nome12');


document.querySelector(".n12").value=""


 if(nome12=="") {
  alert("escreva um nome válido");
}


else if(nome12 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }







//n14
let nome14 = localStorage.getItem('nome14');
console.log(nome14);

 if(nome14 != null) {
     let n14 = document.querySelector(".n14");
     n14.style="background-color:yellowgreen;"
 }
 
 
function n14() {


if(nome14==null) {
  localStorage.nome14=window.prompt("insira o nome")
localStorage.numero=14;

let nome14 = localStorage.getItem('nome14');


document.querySelector(".n14").value=""


 if(nome14=="") {
  alert("escreva um nome válido");
}


else if(nome14 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}


if(nome14 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome14}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome14=window.prompt("insira o nome")
localStorage.numero=14;


let nome2 = localStorage.getItem('nome14');


document.querySelector(".n14").value=""


 if(nome14=="") {
  alert("escreva um nome válido");
}


else if(nome14 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }








//n13
let nome13 = localStorage.getItem('nome13');
console.log(nome13);

 if(nome13 != null) {
     let n13 = document.querySelector(".n13");
     n13.style="background-color:yellowgreen;"
 }
 
 
function n13() {


if(nome13==null) {
  localStorage.nome13=window.prompt("insira o nome")
localStorage.numero=13;

let nome13 = localStorage.getItem('nome13');


document.querySelector(".n13").value=""


 if(nome13=="") {
  alert("escreva um nome válido");
}


else if(nome13 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}


if(nome13 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome13}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome13=window.prompt("insira o nome")
localStorage.numero=13;


let nome13 = localStorage.getItem('nome13');


document.querySelector(".n13").value=""


 if(nome13=="") {
  alert("escreva um nome válido");
}


else if(nome13 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }







//n15
let nome15 = localStorage.getItem('nome15');
console.log(nome15);

 if(nome15!= null) {
     let n15 = document.querySelector(".n15");
     n15.style="background-color:yellowgreen;"
 }
 
 
function n15() {


if(nome15==null) {
  localStorage.nome15=window.prompt("insira o nome")
localStorage.numero=15;

let nome15 = localStorage.getItem('nome15');


document.querySelector(".n15").value=""


 if(nome15=="") {
  alert("escreva um nome válido");
}


else if(nome15 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}


if(nome15 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome15}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome15=window.prompt("insira o nome")
localStorage.numero=15;


let nome15 = localStorage.getItem('nome15');


document.querySelector(".n15").value=""


 if(nome15=="") {
  alert("escreva um nome válido");
}


else if(nome15 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }





//n16


let nome16 = localStorage.getItem('nome16');
console.log(nome16);

 if(nome16 != null) {
     let n16 = document.querySelector(".n16");
     n16.style="background-color:yellowgreen;"
 }
 
 
function n16() {


if(nome16==null) {
  localStorage.nome16=window.prompt("insira o nome")
localStorage.numero=16;

let nome16 = localStorage.getItem('nome16');


document.querySelector(".n16").value=""


 if(nome16=="") {
  alert("escreva um nome válido");
}


else if(nome16 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}


if(nome16 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome16}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome16=window.prompt("insira o nome")
localStorage.numero=16;


let nome16 = localStorage.getItem('nome16');


document.querySelector(".n16").value=""


 if(nome16=="") {
  alert("escreva um nome válido");
}


else if(nome16 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }





//n17
let nome17 = localStorage.getItem('nome17');
console.log(nome17);

 if(nome17 != null) {
     let n17 = document.querySelector(".n17");
     n17.style="background-color:yellowgreen;"
 }
 
 
function n17() {


if(nome17==null) {
  localStorage.nome17=window.prompt("insira o nome")
localStorage.numero=17;

let nome17 = localStorage.getItem('nome17');


document.querySelector(".n17").value=""


 if(nome17=="") {
  alert("escreva um nome válido");
}


else if(nome17 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}



if(nome17!= null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome17}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome17=window.prompt("insira o nome")
localStorage.numero=17;


let nome17 = localStorage.getItem('nome17');


document.querySelector(".n17").value=""


 if(nome17=="") {
  alert("escreva um nome válido");
}


else if(nome17 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }




//n18
let nome18 = localStorage.getItem('nome18');
console.log(nome18);

 if(nome18 != null) {
     let n3 = document.querySelector(".n18");
     n3.style="background-color:yellowgreen;"
 }
 
 
function n18() {


if(nome18==null) {
  localStorage.nome18=window.prompt("insira o nome")
localStorage.numero=18;

let nome18 = localStorage.getItem('nome18');


document.querySelector(".n18").value=""


 if(nome18=="") {
  alert("escreva um nome válido");
}


else if(nome18 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}


if(nome18 != null) {
    
 
  
  let c = confirm(`esse número pertence á ${nome18}. 😃 Deseja editá-lo?`)     
  
  
  if(c == true) {
       localStorage.nome18=window.prompt("insira o nome")
localStorage.numero=18;


let nome18 = localStorage.getItem('nome18');


document.querySelector(".n18").value=""


 if(nome18=="") {
  alert("escreva um nome válido");
}


else if(nome18 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    }




//n19
let nome19 = localStorage.getItem('nome19');
console.log(nome19);

 if(nome19!= null) {
     let n19 = document.querySelector(".n19");
     n19.style="background-color:yellowgreen;"
 }
 
 
function n19() {


if(nome19==null) {
  localStorage.nome19=window.prompt("insira o nome")
localStorage.numero=19;

let nome19 = localStorage.getItem('nome19');


document.querySelector(".n19").value=""


 if(nome19="") {
  alert("escreva um nome válido");
}


else if(nome19 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}



if(nome19 != null) {
    
   let c = confirm(`esse número pertence á ${nome19}. 😃 Deseja editá-lo?`)     
  
       if(c == true) {
       localStorage.nome19=window.prompt("insira o nome")
localStorage.numero=19;


let nome19 = localStorage.getItem('nome19');


document.querySelector(".n19").value=""


 if(nome19=="") {
  alert("escreva um nome válido");
}


else if(nome19 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

    
}
    



//n20
let nome20 = localStorage.getItem('nome20');
console.log(nome20);

 if(nome20!= null) {
     let n20 = document.querySelector(".n20");
     n20.style="background-color:yellowgreen;"
 }
 
 
function n20() {


if(nome20==null) {
  localStorage.nome20=window.prompt("insira o nome")
localStorage.numero=20;

let nome20 = localStorage.getItem('nome20');


document.querySelector(".n20").value=""


 if(nome20=="") {
  alert("escreva um nome válido");
}


else if(nome20 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}



if(nome20 != null) {
    
   let c = confirm(`esse número pertence á ${nome20}. 😃 Deseja editá-lo?`)     
  
     
      if(c == true) {
       localStorage.nome20=window.prompt("insira o nome")
localStorage.numero=20;


let nome20 = localStorage.getItem('nome20');


document.querySelector(".n20").value=""


 if(nome20=="") {
  alert("escreva um nome válido");
}


else if(nome20 == null) {
     alert("escreva um nome válido"); 
}


else {


alert('registrado');
location.reload();

}



}

  } 
    

}
   

//21 ao 30;
 //n21
 
 /*
let nome21 = localStorage.getItem('nome21');
console.log(nome21);

 if(nome21!= null) {
     let n21 = document.querySelector(".n21");
     n21.style="background-color:yellowgreen;"
 }
 
 
function n21() {


if(nome21==null) {
  localStorage.nome21=window.prompt("insira o nome")
localStorage.numero=21;

let nome21 = localStorage.getItem('nome21');


document.querySelector(".n21").value=""


 if(nome21=="") {
  alert("escreva um nome válido");
}


else if(nome21 == null) {
     alert("escreva um nome válido"); 
}


else {
alert('registrado');
location.reload();

}



}



if(nome21 != null) {
    
   let c = confirm(`esse número pertence á ${nome21}. 😃 Deseja editá-lo?`)     
  
     
    
}
    }*/
    
    //



//sorteio;

let resultado;

function sorteio() {

    
  let valor = localStorage.getItem("valor");
  
  let nomes = [nome1 , nome2, nome3, nome4, nome5, nome6, nome7,nome8,nome9, nome10, nome11, nome12,nome13,nome14,nome15, nome16, nome17, nome18,  nome19, nome20];
  
 sorte = Math.floor(Math.random()*valor);
 

 
 if(sorte != 0) {
 
     
   
    
   
    
    if(sorte == 1 && nome1 !=null)  {
    localStorage.sorte=parseInt(1)
      localStorage.ganhador=nome1;
    
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome1} 😃`)
        s.play();
        
       setTimeout(reload, 2000);
        
    }
    
    else if(sorte ==1 && nome1 ==null)
    {
    
      
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
          setTimeout(reload, 2000);
    }
   
    
    
    
     if(sorte == 2 && nome2 !=null)  {
     localStorage.sorte=parseInt(2)
       localStorage.ganhador=nome2;     
        s.play();
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome2} 😃`)
     
         setTimeout(reload, 2000);
    }
    
    
       else if(sorte ==2 && nome2 ==null)
    {
    
     
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
     
      setTimeout(reload, 2000);
    }
   
    
     if(sorte == 3 && nome3 !=null)  {
     
     localStorage.sorte=parseInt(3)
       localStorage.ganhador=nome3;
        s.play();
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome3} 😃`)
       
       
         setTimeout(reload,2000);
      
        
    }
 
    else if(sorte ==3 && nome3 ==null)
    {
              alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
          setTimeout(reload, 2000);
    }
   
 
 
  if(sorte == 4 && nome4 !=null)  {
  localStorage.sorte=parseInt(4)
    localStorage.ganhador=nome4;
     s.play();
  
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome4} 😃`)
        
        
         setTimeout(reload,2000);
    }
    
       else if(sorte ==4 && nome4 ==null)
    {
      
    
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
        
        
          setTimeout(reload,2000);
    }
   
    
    
     if(sorte == 5 && nome5 !=null)  {
     localStorage.sorte=parseInt(5)
     localStorage.ganhador=nome5;
        s.play();
          
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome5} 😃`)
        
        setTimeout(reload, 2000);
    }
    
       else if(sorte ==5 && nome5 ==null)
    {
   
    
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
        
        setTimeout(reload, 2000);
        
    }
   
    
 
 }
    
  //
     
    if(sorte == 6 && nome6 !=null)  {
    localStorage.sorte=parseInt(6)
      localStorage.ganhador=nome6;
    
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome6} 😃`)
        s.play();
        
       setTimeout(reload, 2000);
        
    }
    
    else if(sorte ==6 && nome6 ==null)
    {
      
       
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
          setTimeout(reload, 2000);
    }
   
    
    
    
     if(sorte == 7 && nome7 !=null)  {
     localStorage.sorte=parseInt(7)
       localStorage.ganhador=nome7;     
        s.play();
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome7} 😃`)
     
         setTimeout(reload, 2000);
    }
    
    
       else if(sorte ==7 && nome7 ==null)
    {
      
    
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
     
      setTimeout(reload, 2000);
    }
   
    
     if(sorte == 8 && nome8 !=null)  {
     
     localStorage.sorte=parseInt(8)
       localStorage.ganhador=nome8;
        s.play();
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome8} 😃`)
       
       
         setTimeout(reload,2000);
      
        
    }
 
    else if(sorte ==8 && nome8 ==null)
    {
      
    
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
          setTimeout(reload, 2000);
    }
   
 
 
  if(sorte == 9 && nome9 !=null)  {
  localStorage.sorte=parseInt(9)
    localStorage.ganhador=nome9;
    
     s.play();
  
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome9} 😃`)
        
        
         setTimeout(reload,2000);
    }
    
       else if(sorte ==9 && nome9 ==null)
    {
       
    
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
        
        
          setTimeout(reload,2000);
    }
   
    
    
     if(sorte == 10 && nome10 !=null)  {
     localStorage.sorte=parseInt(10)
     localStorage.ganhador=nome10;
        s.play();
          
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome10} 😃`)
        
        setTimeout(reload, 2000);
    }
    
       else if(sorte ==10 && nome10 ==null)
    {
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
        
        setTimeout(reload, 2000);
        
    }
   
   if(sorte == 11 && nome11 !=null)  {
    localStorage.sorte=parseInt(11)
      localStorage.ganhador=nome11;
    
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome11} 😃`)
        s.play();
        
       setTimeout(reload, 2000);
        
    }
    
    else if(sorte ==11 && nome11 ==null)
    {
    
      
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
          setTimeout(reload, 2000);
    }
   
    
    
    
     if(sorte == 12 && nome12 !=null)  {
     localStorage.sorte=parseInt(12)
       localStorage.ganhador=nome12;     
        s.play();
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome12} 😃`)
     
         setTimeout(reload, 2000);
    }
    
    
       else if(sorte ==12 && nome12 ==null)
    {
    
     
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
     
      setTimeout(reload, 2000);
    }
   
    
     if(sorte == 13 && nome13 !=null)  {
     
     localStorage.sorte=parseInt(13)
       localStorage.ganhador=nome13;
        s.play();
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome13} 😃`)
       
       
         setTimeout(reload,2000);
      
        
    }
 
    else if(sorte ==13 && nome13 ==null)
    {
              alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
          setTimeout(reload, 2000);
    }
   
 
 
  if(sorte == 14 && nome14 !=null)  {
  localStorage.sorte=parseInt(14)
    localStorage.ganhador=nome14;
     s.play();
  
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome14} 😃`)
        
        
         setTimeout(reload,2000);
    }
    
       else if(sorte ==14 && nome14 ==null)
    {
      
    
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
        
        
          setTimeout(reload,2000);
    }
   
    
    
     if(sorte == 15 && nome15 !=null)  {
     localStorage.sorte=parseInt(15)
     localStorage.ganhador=nome15;
        s.play();
          
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome15} 😃`)
        
        setTimeout(reload, 2000);
    }
    
       else if(sorte ==15 && nome15 ==null)
    {
   
    
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
        
        setTimeout(reload, 2000);
        
    }
   
    if(sorte == 16 && nome16 !=null)  {
    localStorage.sorte=parseInt(16)
      localStorage.ganhador=nome16;
    
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome16} 😃`)
        s.play();
        
       setTimeout(reload, 2000);
        
    }
    
    else if(sorte ==16 && nome16 ==null)
    {
    
      
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
          setTimeout(reload, 2000);
    }
   
    
    
    
     if(sorte == 17 && nome17 !=null)  {
     localStorage.sorte=parseInt(17)
       localStorage.ganhador=nome17;     
        s.play();
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome17} 😃`)
     
         setTimeout(reload, 2000);
    }
    
    
       else if(sorte ==17 && nome17 ==null)
    {
    
     
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
     
      setTimeout(reload, 2000);
    }
   
    
     if(sorte == 18 && nome18 !=null)  {
     
     localStorage.sorte=parseInt(18)
       localStorage.ganhador=nome18;
        s.play();
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome18} 😃`)
       
       
         setTimeout(reload,2000);
      
        
    }
 
    else if(sorte ==18 && nome18==null)
    {
              alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
          setTimeout(reload, 2000);
    }
   
 
 
  if(sorte == 19 && nome19 !=null)  {
  localStorage.sorte=parseInt(19)
    localStorage.ganhador=nome19;
     s.play();
  
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome19} 😃`)
        
        
         setTimeout(reload,2000);
    }
    
       else if(sorte ==19 && nome19 ==null)
    {
      
    
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
        
        
          setTimeout(reload,2000);
    }
   
    
    
     if(sorte == 20 && nome20 !=null)  {
     localStorage.sorte=parseInt(20)
     localStorage.ganhador=nome20;
        s.play();
          
        alert(`o número sorteado foi o número ${sorte}, parabéns ${nome20} 😃`)
        
        setTimeout(reload, 2000);
    }
    
       else if(sorte ==20 && nome20 ==null)
    {
   
    
        alert(`o número sorteado foi o número ${sorte}, porém não houve ganhador.😃`)
        
        setTimeout(reload, 2000);
        
    }
     
 
 }
    
  //
     
    
   
    
    
 
   
    
    
    //
        
    


function reload() {
    location.reload();
    
}



function mostre() {
    location.href="lista.html"
}

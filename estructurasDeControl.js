var numero = 10;
if(numero % 2==0){
    console.log(numero + " es par")
}else{
    console.log(numero + " no es par")
}

var numero = 5;
if(numero % 5==0){
    console.log(numero + " es multiplo de 5")
}else{
    console.log(numero + " no es multiplo de 5")
}

for(let i=0;i<=5;i++){ /*operador incrimental en una unidad*/ 
    console.log(i);
}

for(let i=10;i>0;i--){ /*operador decremental en una unidad*/
    console.log(i);
}

let contador =0;
while(contador < 5){
    contador ++;
    console.log(contador);
}

let contador1 =10;
while(contador1 >0){
    contador1 --;
    console.log(contador1);
}

let suma=7+2;
console.log(suma);
let resta=5-2;
console.log(resta);
let multiplicacion=3*5;
console.log(multiplicacion);
let division=4/2;
console.log(division);
let modulo=10%4;
console.log(modulo);

let mayorQue=10>5;
console.log(mayorQue);
let mayorIgualQue=13>=14;
console.log(mayorIgualQue);
let menorQue=10<20;
console.log(menorQue);
let menorIgualQue=25<5;
console.log(menorIgualQue);
let  igualQue ="Hola" === "hola"
console.log(igualQue);
let  diferenteQue ="Hola" !== "hola"
console.log(diferenteQue);

let and=true && true
console.log(and);
let or=false || true
console.log(or);
let not=!false
console.log(not);

let sumaMultiplicacionModulo=2+4*3%3;
console.log(sumaMultiplicacionModulo);
let restaMulDivSuma=5-7*8/2+3;
console.log(restaMulDivSuma);

const persona ={
nombre: "Carlos",
edad:25,
ocupacion: "Desarrollador",
};
console.log(persona);
/*como acceder al atributo */
console.log(persona.edad);

const colores = ["rojo","verde","azul"];
console.log(colores);

const miNombre = ["Pedrito y tengo 25 años"]
console.log(miNombre);

/*Añadir o modifica datos a la persona*/
persona["apellido"]="perez";
console.log(persona);
persona["C.I."]=989598254;
console.log(persona);

/*como cambiar sus datos de la persona*/
persona.nombre="Pedrito";
console.log(persona);
persona.ocupacion="Sastre";
console.log(persona);
persona.edad=20;
console.log(persona);
console.log(colores);
console.log(colores.length);
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);

for(let i=0;i<colores.length;i++){
    console.log("Elemento: "+colores[i]+" indice:"+i);
}
colores.push("amarillo");
colores.push("naranjado");
colores.push("plomo");
colores.push("MARRON");
colores.push("DORADO")
console.log(colores);
colores.reverse();
console.log(colores);
colores.sort();
colores.push(45);
colores.push(30);
colores.push(20);
console.sort();
console.log(colores);
colores.push(true);
colores.push(false);
console.sort();
console.log(colores);
colores.push(["1","2"])
console.sort();
console.log(colores);

var elemento = colores.pop();
console.log(elemento);
console.log(colores);
colores.find();
console.log(colores);
colores.findIndex();

var encontrar = colores.find(function(elemento){
return elemento === "rojo";
});
var elemento = colores.findIndex(function(elemento){
return elemento ===1;
});
colores.findIndex(function(elemento){
return elemento === 1;
});

/*Clase 08/01/2024*/
function saludar(nombre){
    return "hola, "+nombre+"!";
}
const mensaje=saludar("tatiana");
console.log(mensaje);

function sumar(){
    let a,b,c;
    a=4;    
    b=6;
  c=a+b;
console.log("La suma es: "+c);
}
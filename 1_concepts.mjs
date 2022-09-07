//una clase en js no es mas que una function
/*Las funciones con el termino function pueden tener
la palabra reservada this dentro de ella para referisse
a si mismas */
//al tener la palabra this. la funcion ignora el return
function ejemplo() {
  this.concect = "contecto";
}
let casa = new ejemplo();
// console.log(casa);

/*una funcion flecha no tienen contexto THIS */

const ejemplo2 = () => {};

/*IMPORT Y EXPORT------------------------------*/

/*Una forma de enviar o recibir archivos js entre si */
const chanchosFelices = ["chancho1", "chancho2", "chancho3"];

/*Para exportar mas de un dato, el module export
se tiene que convertir en un objeto */
// module.exports = chanchosFelices;
// module.exports = {
//   chanchosFelices,
//   chanchosTristes,
// };

//nueva forma de exportar
export default chanchosFelices;

/*NOTA: OTRA FORMA DE EXPORTAR ES con la palabra "EXPORT" 
delante de las variables 
export const chanchosFelic....*/
export const chanchosTristes = ["triste1", "triste2"];

//exportar mas de un dato
const otrosChanchos = [];
const masChanchos = ["pepe"];
export { otrosChanchos, masChanchos };

/*exportar funciones */
const fn1 = () => {
  console.log("soy la funcion 1");
};
function fn2() {
  console.log("soy la funcion 2");
}

export { fn1, fn2 };

//CLASES EN JAVASCRIPT-----------------------

/*expresion de clase: definimos una clase y se la 
asignamos a una constante */
const Tetragrado = class R {};
/*Declaracion de clase */
class Rectangulo {}

// console.log(Cuadrado, Rectangulo);
/*Cuando usamos la palabra function este tiene un
comportamiento HOISTING, es cuando tomamos variables
definidas con var y funciones con function y las 
lleva al comienzo del archivo */
function Cuadrado() {}

/*Los parametros pueden tener valores por defecto
cuando no se le entrega ningun argumento */

//----
/*se puede crear propiedades privadas en clase "#" */

class Chancho {
  static estatico = 2;
  #hambre;
  constructor(estado = "feliz", hambre = false) {
    this.estado = estado;
    this.#hambre = hambre;
  }

  hablar() {
    console.log(
      `soy un chancho ${this.estado} ${
        this.#hambre ? "con mucha hambre!" : "Satisfecho!"
      }`
    );
  }

  static comer() {
    console.log("estoy comiendo " + this.estatico);
  }
}

//ejecucion de clases
// Chancho.comer();
// const feliz = new Chancho("feliz");
// feliz.hablar();
// console.log(feliz);

/*Los metodos estaticos no pueden llamar a propiedades
no estaticas, para poder llamarla tenemos que definirla
como static */

//SPREAD OPERATOR -------------------------------
/*Cuando nosotros tenemos una rreglo y queremos llamar una
funcion el spread operator empieza a mapear ese arreglo
para mandarloc omo argumento a esa funcion */

const fn = (a, b, c) => console.log(a + b + c);

const arr = [1, 2, 3];

//fn(arr[0],arr[1],arr[2])
// fn(...arr); //result=6

const arr1 = [4, 5];

// fn(...arr1); //result=NaN suma 4+5+undefined

//spread para copiar y pasarlos
// const arr2 = arr.concat(arr1);
const arr2 = [...arr, ...arr1];
// console.log(arr2);

/*si modificamos los arrelgos, no va a afectar el result
de el spread operator */

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 5, c: "chanchito feliz" };
//los datos que entran al final son lo que quedan
const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

/*uso en la vida real */

const obj5 = {
  ...obj1,
  loading: true,
  data: {
    prop: "lala",
    animal: "perrito",
  },
};

// console.log(obj5);

//REST OPERATOR---------------------------
function rest() {
  const rest = (a, ...argumentos) => {
    console.log(a);
    console.log(argumentos);
  };

  // rest(1, 2, 3);

  //
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  };

  //al devolver un objeto podemos obtener un valor de este
  const { a, b, ...restobj } = obj;
  console.log(a, b, restobj);

  const arrr = [1, 2, 3, 4, 5, 6, 7];

  const [c, d, ...r] = arrr;

  console.log(c, d, r);

  //aplicando reac podria ser uso

  const useState = () => ["valor", () => {}];

  const [valor, setValor] = useState;
}

//METODOS ARREGLOS:FILTER------------------
/*nos devuelve un arreglo que tiene la misma o menor
longitud que el arreglo inicial, sioempre y cuando el
valor de retorno de la funcion que le pasamos a filter
retorna en true*/
function filter() {
  let arr = [0, 1, 2, 3, 4];

  const r = arr.filter((e) => e < 3);
  console.log(r);

  //tambien nos muestra el indice del arr que estamos iterando
  //filter es para condiciones de orden
  const l = arr.filter((e, i) => {
    console.log(i);
    e < 3;
  });
}

// filter();

//METODOS ARRELGOS: MAP----------------------
/*Toma todos loe elementos de un arreglo y les aplica
una funcion, te devuelve un arreglo con la misma long,
pero con una funcion en cada una de ellos. */

//map es para alteracion de datos
function map() {
  let arr = [1, 2, 3, 4, 5];

  const mapped = arr.map((e) => e * 2);
  console.log(mapped);

  const user = [
    { id: 1, name: "chanchito feliz" },
    { id: 2, name: "chanchito triste" },
    { id: 3, name: "chanchito Emocionado" },
    { id: 4, name: "chanchito Alone" },
  ];

  const mapped2 = user.map((e) => {
    return e.name;
  });
  console.log(mapped2);
}

// map();

//METODO ARREGLOS:REDUCE------------------------
/* tOMA los elementos de un arreglo y devolvemos 
lo que queramos, la funcion que recibe reduce recibe 2 parametros
(I acumulador,I elemento que estamos iterando, indice, arreglo que se itera)*/
function reduce() {
  let arr = [1, 2, 3, 4, 5];
  //acm=es todos los valores que tenemos acumulados en el arreglo
  //el=elemento en el que se encuentra el indice del array
  //el segundo valor que recibe la funcion es el valor inicial del acumulador
  const r1 = arr.reduce((acm, el) => acm + el, 0);

  /*funcionamiento
  el acm empieza en 0 y el elemento es = al primer
  elemento del array.
  estos 2 se suman y luego el acumulador(acm) es 0+1
  ahora el acm es 1 y se suma con 2 que es el seg. elemt
  ahora el acm es 3 y se suma con 3 que es el ter.elet
  ahora el acm es 6 y se suma con 4 ....*/
  console.log(r1);

  //a=acm b=el
  const getMax = (a, b) => Math.max(a, b);

  const r2 = arr.reduce(getMax, 0);
  console.log(r2);

  const user = [
    { id: 1, name: "chanchito feliz" },
    { id: 2, name: "chanchito triste" },
    { id: 3, name: "chanchito Emocionado" },
    { id: 4, name: "chanchito Alone" },
  ];

  const r3 = user.reduce(
    (acc, el) => `${acc === "" ? "" : `${acc}, `}${el.name}`,
    ""
  );

  console.log(r3);

  const r4 = user.reduce((acc, el) => {
    if (el.id < 2) {
      return acc;
    } else {
      return acc.concat(el);
    }
  }, []);
  console.log(r4);
}

// reduce();

//FETCH -------------------------------
/*Lo que nos interesa de una respuesta de un llamado
a una API es la __proto__/json y text

json: convierte la respues a un objeto json
text: convierte la respuesta a una cadena de texto*/

/*

url="https...."
//peticion GET
fetch(url)
  .then((response)=>response.json())
  .then(data=>console.log(data))

//peticion POST:crear recursos dentro de una API REST
fetch(url,{
  method: "POST",
  headers:{
    "Content-Type":"application/json"//te estamos enviando un json
    opcional "Authotization":"Bearer acadebieseexistiruntokendeautorizacion(apikey)"
  },
  //body contiene los datos que le vamos a enviar al servidor en un string
  body: JSON.stringify({
    //estos son ejemplos
    name:"chanchito Feliz",
    website:"google.com"
  })
})
  .then((response)=>response.json())
  .then(data=>console.log(data))

  ASYNC

  const fn=async()=>{
    const response = await fetch(url,{
  method: "POST",
  headers:{
    "Content-Type":"application/json"//te estamos enviando un json
    opcional "Authotization":"Bearer acadebieseexistiruntokendeautorizacion(apikey)"
  },
  //body contiene los datos que le vamos a enviar al servidor en un string
  body: JSON.stringify({
    //estos son ejemplos
    name:"chanchito Feliz",
    website:"google.com"
  })
})
const data = await response.json()
console.log(data)
  }
*/

/*Cuando debo usar .then o async await
  async await es imperativo, solo se puede componer
  codigo si usamos la api de promesas (.then) */
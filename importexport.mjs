//vieja forma
// const chanchos = require("./1_concepts");

// console.log(chanchos);

//nueva forma
/*chanchos se importa por defecto */
/*Al colocarle llaves indicamos que exportamos un 
elemento directamente */
/*si nosotros no trabajamos con un archivo que tenga 
un package.json tenemos que cambiar el tipo de js a mjs */
import chanchos, {
  chanchosTristes,
  otrosChanchos,
  masChanchos,
  fn1,
  fn2,
} from "./1_concepts.mjs";

console.log("----------------1-------------");
console.log(chanchos);
console.log(chanchosTristes);
console.log(masChanchos);
console.log(otrosChanchos);

fn1();
fn2();

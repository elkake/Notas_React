/*
npx> comando que viene includo en npm que va a buscar
    el paquete que le indiquemos, lo descarga, ejecuta
    y le pasa el argumento de mi carpeta
    ejm:
    npx create-react-app mi-app

comandos>
npm start> comenzar con el servidor de desarrollo(live server)
npm run build> generar paquete para uso en produccion
            toma todos nuestros archivos y los mueve a una 
            carpeta que va a ser usado en produccion y le 
            aplica algunos cambios esteticos para que pese
            menos.
npm test> permite correr todos los test que hayamos escrito
npm run eject> elimina la herramienta de npm run eject
            ,toma todos los archivos de configuracion y
            los deja en el directorio de nuestra aplicacion.
            (casi no es necesario y no recomendado)
            Sinoloejectamos va a seguir siendo mantenida
            por el equipo de facebook.
*/
//ARCHIVOS Y CARPETAS
/*
GIT>contieen las configuraciones necesarias para que podamos
    desplegarlo en un repositorio
NODE-MODULE>contiene las dependecias necesarias para react
C.PUBLIC>Se encuentran los archivos que van a ser publicos
    para el usuario.
    MANIFEST.JSON>Contiene informacion sobre los archivos
                de esta carpeta
    robots>Permite que nuestra aplicacion sea mas facil
            de indexar por los robots de google.
.GITIGNORE>contiene las referencias a archivos que github
        va a ignorar al momento de mandarla a un repositori
PACKAGE-LOG.JSON>TODAS las dependencias que hemos instalado con
        una version particular y con su url en particula
        , al momento de mandarlo a produccion va a usar
        nuestropackage-log en vez de buscar las ultimas 
        versiones.

PACKAGE.JSON>Contiene configuracion y datos sobre la app
src>
*/
/*NOTA: TODA APP CON REACT NECESITA DOS ARCHIVOS PARA FUNCIONAR
    EL index.js en src y el archivo index.html en public */

/*
CAMBIOS AL MOMENTO DE RENDERIZAR
///////////////////////////////////////////
1)SI Importarmos de el cliente de react dom

    import ReactDOM from "react-dom/client";

        La manera de renderizar es esta,primer llamando al root
        hacia una constante y luego renderizar.

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    "hola"
    );

2)Si llamamos directamente del react-dom

    import ReactDOM from "react-dom";

        La manera de llamar es la siguiente.
        render recibe 2 parametros:
        el codigo que queremos hacer y luego
        donde lo queremos hacer, en este caso el root

    ReactDOM.render("lala", document.getElementById("root"));

*/

/*
En jsx se pueden pasar funciones como si fueran "HTML"

//el parametro children es predeterminado para referirse
a los hijos de una etiqueta
const Li = ({ estado, children }) => (
  <li>
    {children}
    {estado}
  </li>
);
const X = () => (
  <ul>
  Li es una funcion jsx que tiene dos propiedades
     propiedades estado=feliz children=chanchito 
    <Li estado={"feliz"}>Chanchito </Li>
    <li>Chanchito Triste</li>
    <li>Felipe</li>
  </ul>
);
*/

/*EJEMPLO

const Li = ({ estado, children ,casa,edad}) => {
  console.log(casa,edad); 
  return(<li>
    {children} estoy {estado}
  </li>)
  }
const X = () => (
  <ul>
    <Li estado={"feliz"} 
    casa={false} edad={24}>Chanchito</Li>
    <Li estado={"triste"}>Chanchito</Li>
    <Li estado={"emocionado"}>Felipe</Li>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <X />
);
*/

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  Strictmode>nos va a mostrar errors o advertencias al no
            ser strictos con nuestro codigo.
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
); */

/*Un componente en react para que nosotros lo podamos utilizar
tiene que cumplir con una caracteristica, ser una funcion. o un arrow
function dentro de una constante.
//esto es dentro de app.js
function App() {
  const valor = "triste";
  return <p>Chanchito {valor}</p>;
}

const App=()=>
{
    //la clase en jsx de declara como className
  return <p className="clase-css">Chanchito feliz</p>;
}

export default App;

Otro dato interesante, es que podemos ahorrarnos
crear 3 elementos con la misma clase, haciendo solo una
funcion que genere ese elemento, y gracias a jsx
repeterilo 3 veces.

const Li = () => {
  return <li className="clase-li">valor de li</li>;
};

function App() {
  const valor = "triste";
  return (
    <ul className="clase-css">
      <Li></Li>
      <Li></Li>
      <Li></Li>
    </ul>
  );
}

-Podemos ver las propiedades si nuestra funcion tiene un parametro
este primer parametro nos devuelve un objeto con las
propiedades de los elementos jsx

const Li = (props) => {
  console.log(props);
  return <li className="clase-li"></li>;
};

function App() {
  return (
    <ul className="clase-css">
      <Li>Valor de li</Li>
    </ul>
  );
}
=object{
    children:"valor de li"
}
*/

/*
AGREGAR ESTILO
inline style: dentro de un componente jsx, colocamos
una estiqueta style={estilo}

const estilo=(bg="#333")=>({
  backgroundColor:bg,
  color:"#f00",
  padding:"10px",
  margin:"10px 15px"
})
  
const Li = ({ children }) => {
  return (<li style={estilo("#000")} className="clase-li">{children}</li>)
};

function App() {
  return (
    <ul style={estilo("#750")}  className="clase-css">
      <Li>Valor de li</Li>
    </ul>
  );
}

otra forma es de una constante, 
combinando 2 estilos con spread operator:

const estilo2 = {
  boxShadow: "0 5px 3px #fff",
};
const estilo = (bg = "#333") => ({
  backgroundColor: bg,
  color: "#f00",
  padding: "10px",
  margin: "10px 15px",
});

const Li = ({ children }) => {
  return (
    <li style={{...estilo2,...estilo("#000")}} className="clase-li">
      {children}
    </li>
  );
};

*/
/*
DATOS EXTRAS:
EXtensiones que nos ayudan:
ver iconos de una mejor forma en vscode
MATERIAL ICON THEME
hacer que las lineas en nuestro codigo den un salto automatico
"editor.wordWrap": "on"



*/
/*Self Closing tags

Convertir funciones que retornan componentes a etiquetas
root.render(<div>
    {funcion}
    <funcion></funcion>
    <funcion/> --->esta es la forma que usaremos
  </div>)
*/

//SIEMPRE DEBE HABER UN ELEMENTO QUE CONTENGA AL RESTO

/*
////////////////////////////
PROP TYPES
////////////////////////////
Nosotros podemos definir que tipo de dato queremos recibir en nuestro codigo. Para esto nos podemos ayudar de una dependencia llamada prop-Types

despues de instalarla tenemos que importarla
 import PropTypes from 'prop-types';

 export function Button({ text, name }) {
  return (
    <button>
      {text}-{name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};


*/

///////////////////////////////////////////////////////

/*

////////////////////////////
DEFAULT PROPS
////////////////////////////
Podemos definir propeidades por defecto en una function
de dos formas:

funcion Button({text="hola"})
retunr <button>
    {text}
<button>


o

Button.defaultProps={
  text:"hola"
}
*/
///////////////////////////////////////////////////////

/*
////////////////////////////
Clases en react
////////////////////////////
Esto tambien se puede ver como una funcion a exportar, es una manera antigua de hacerlo, que necesita el metodo render e importar la extension Component de React

import { Component } from 'react';

export class Saludar extends Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
*/

/*
///////////////////////////////////
HOOKS
/////////////////////////////////////
Solo son funciones de react que nos ayudan en nuestro desarrollo
//////////////////////////////////////
USESTATE:
//////////////////////////////////////
es un arreglo que tiene el dato y luego una funcion

import { useState } from 'react';

function Counter() {
  //esto es igual a counter=0, solo que se acompaña de una funcion
  const [counter, setCounter] = useState(5);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {setCounter(counter + 1);}}>
        Sumar
      </button>
    </div>
  );
}

///////////////////////////////////////
function SetMessage() {
  
  const [mensaje, setMensaje] = useState('');

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert('El mensaje es: ' + mensaje);
        }}
      >
        Save
      </button>
    </div>
  );
}


//////////////////////////////////////
USEEFECT:
//////////////////////////////////////
function SetMessage() {
  //esto es igual a counter=0, solo que se acompaña de una funcion
  const [mensaje, setMensaje] = useState('');

  useEffect(()=>{
  //ejecuta algo cada vez que haya un cambio en la pagina
  //poniendo un arreglo vacio despues de la coma significa que no le estamos pasando ninguna dependencia asi que se ejecuta solo una vez
  console.log("render")
  }, [ ])

  ////////////////////////
  aqui se le dio la dependencia del contador, asi que cada vez que el contador sume 1 se activa

  
  function SetMessage() {
  //esto es igual a counter=0, solo que se acompaña de una funcion
  const [mensaje, setMensaje] = useState('');
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('render');
  }, [counter]);

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert('El mensaje es: ' + mensaje);
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}
 */
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
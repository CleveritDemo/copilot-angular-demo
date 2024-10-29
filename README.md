# 💻 Copilot Angular Demo

En este proyecto de demostración exploraremos cómo GitHub Copilot puede facilitar el desarrollo de aplicaciones web utilizando el framework Angular.

El objetivo principal será construir una aplicación sencilla que permita visualizar un listado de películas y sus detalles completos.

Además, emplearemos GitHub Copilot para crear una API REST de prueba usando `json-server`, lo que nos permitirá cargar datos en la aplicación a medida que avanzamos en este ejercicio práctico.

## ✅ Specific Objectives:

- Configurar el Entorno de Desarrollo

  1. Instalar dependencias
  2. Configurar json-server como API REST "mock" para proveer datos de prueba a la aplicación.
  3. Integrar Angular Material para utilizar sus componentes y estilos en la interfaz.

- Crear Componentes en Angular

  1. Crear un componente principal para el listado de películas.
  2. Desarrollar un componente de tarjeta (card) para mostrar información básica de cada película.
  3. Implementar un componente de detalles de película, que permita ver información completa al seleccionar una película del listado.

- Utilizar GitHub Copilot para Acelerar el Desarrollo

  1. Aprovechar las sugerencias de Copilot para la creación de componentes y servicios.
  2. Utilizar Copilot para generar código repetitivo y optimizar el tiempo de desarrollo.

- Usar componentes de Angular Material, como cards, chips y buttons para estructurar la interfaz.

  1. Personalizar estilos y colores para una experiencia de usuario coherente y visualmente atractiva.

- Configurar un servicio en Angular para consumir datos de la API REST "mock" (json-server).
  1. Implementar métodos para listar y seleccionar películas a través de este servicio.
  2. Desarrollar Funcionalidades de Navegación y Detalle

Permitir que el usuario navegue desde el listado general de películas hasta el detalle completo de cada una.
Configurar rutas en Angular para gestionar las vistas del listado y los detalles de películas.
Realizar Pruebas Básicas y Validación.

![app demo](/assets/gif.gif)

## 🛠 Requerimientos.

1. NodeJS v20.x - https://nodejs.org/en
2. Angular v18 - https://angular.dev/installation
3. Visual Studio Code.
4. Github Copilot Extension para Visual Studio Code.
5. Git
6. json-server
7. Github Copilot License.

## 🚀 Hands On.

### 1. Clonar el repositorio.

Para comenzar, clonaremos el repositorio en nuestra maquina local. Para ello, ejecutamos el siguiente comando:

```bash
git clone https://github.com/CleveritDemo/copilot-angular-demo
```

Una vez clonado el repositorio, nos movemos dentro de la carpeta del proyecto.

```bash
cd copilot-angular-demo
```

> **NOTA: Standalone Components**.
>
> A partir de la version 14 de angular se introdujeron los standalone components (componentes autonomos), y a partir de la version 17 de angular, se mantienen como la forma por defecto de crear componentes en Angular. Este practico se construye empleando estos componentes, en lugar de los tradicionales modulos.

### 2. Incorporando Angular Material.

En este punto le preguntaremos a copilot como podemos incluir Angular Material. Formulamos un prompt acorde y se lo proporcionamos al Chat.

**Prompt 1.**

```
@workspace Como puedo agregar la libreria de componentes de angular material en mi proyecto Angular?
```

**Respuesta esperada:**

- Listado de pasos para la instalacion de Angular Material en el proyecto.
- Formas de configurar la libreria para personalizacion de estilos.

### 3. Construyendo barra de navegación principal.

Teniendo ya instalada la libreria de Angular Material le solicitaremos a Github Copilot que nos indique como construir una barra de navegacion principal en el componente principal de la aplicación **app.component.html**

**Prompt 2.**

```shell
@workspace Quiero construir una barra de navegacion utilizando el componente Toolbar de Angular Material. Este componente debe mostrar en la parte izquierda el titulo o nombre de mi aplicacion, seguido de tres botones que implementaran funcionalidades de enrutamiento hacia otros componentes aun no desarrollados. Estos botones son: Home, Contacto, Sobre nosotros.
```

**Resultado esperado**

- Generación de codigo de plantilla HTML para la barra de navegacion.
- Lógica de codigo para la importación y configuracion del componente toolbar de angular material.

### 4. Construyendo componente principal: Home

En este punto, con ayuda de copilot, construiremos el componente de entrada o vista inicial de la aplicación llamada **Home** para ello, utilizaremos el siguiente prompt:

**Prompt 3.**

```
@workspace Quiero generar un nuevo componente de Angular llamado "Home" este componente mostrara una grilla de CSS Grid en donde podre visualizar "cards". Genera una estructura dummy, que mas adelante pueda ser modificada.
```

**Resulado esperado**

- Indicación del comando del Angular CLI para generar el componente Home.
- Estructura de template HTML para el componente Home.
- Estructura CSS para el componente Home.
- Logica de codigo Typescript para el componente Home.
- Configuración del enrutamiento para la ruta `/home`y `/`.

### 5. Construyendo componente de Detalle: MovieCard

El componente movie card, como su nombre lo indica, es un pequeño card que tomara como base la Card existente en la librería de Angular Material. Su funcionalidad radica en que se enfocara en mostrar información básica de una película.

**Prompt 4.**

```
@workspace Quiero un componente llamado MovieCard, este compoennte debe implementar la libreria de Angular Material importando los elementos necesarios para utlizar las Cards de material design.
```

**Resulado esperado**

- Indicación del comando del Angular CLI para generar el componente MovieCard.
- Estructura de template HTML para el componente MovieCard.
- Estructura CSS para el componente MovieCard.
- Logica de codigo Typescript para el componente MovieCard.
- Configuración del componente dentro del componente Home.

### 6. Integracion de peticiones HTTP y datos de peliculas.

En este punto requeriremos de un set de datos que podamos utilizar como fuente de información para cargar de datos nuestra aplicación web. Hasta los momentos no hay data que permita visualizar los componentes que se han construido.

#### Configuracion de json-server

En el repositorio se ha dejado cargado un archivo llamado **movies.db.json**, el cual contiene una estructura JSON con información de peliculas que podemos utilizar.

En este punto usaremos la herramienta **json-server** para hacer que este archivo pueda simular ser un API REST completamente funcional para nuestra aplicacion.

Usemos Github copilot para consultar como se puede instalar esta herramienta.

**Prompt 5.**

```
Como se puede instalar y configurar json server para servir este archivo como un API #file:movies.db.json
```

**Resultado esperado.**

- Pasos para la instalación y ejecución de la herramienta json-server mediante **npm**.

#### Configuracion de el proveedor http de angular.

Para realizar peticiones HTTP, angular incorpora funciones dedicadas y optimizadas para ello. Es por eso que debemos incorporar al `providerHttpClient`de angular para manejar todo el tema de comunicación con nuestra API REST.

**Prompt 6.**

```
@workspace Necesito implementar el proveedor providerHttpClient en mi aplicacion, puedes indicarme paso a paso lo que es necesario realizar para implemenarlo?
```

**Resultado esperado.**

- Paso a paso indicando la configuración del `providerHttpClient` dentro del archivo de configuraciones de la aplicacion Angular.

### 7. Generación de interfaces

Para evitar manejar un monton de variables, constantes y propiedades, le pediremos a Copilot que construya interfaces. Estas permitiran homogeneizar las propiedades y el tipo de objeto con el que se trabajara a lo largo de la aplicacion.

**Prompt 7.**

```
@workspace Quiero que construyas un archivo de interfaz basado en la estructura del archivo #file:movies.db.json dentro de un directorio llamado interfaces
```

**Resultado esperado.**

- Se va a generar un archivo de interfaces que contiene las interfaces `Actor`, `MovieDetail` y `Movie` o interfaces con nombres similares.

### 8. Generacion de la capa de servicios.

Para no tener la logica implementada en componentes directamente podemos encapsular todas estas operaciones en un servicio de Angular. Dicho servicio sera inyectado en los componentes mediante la inyeccion de dependencias automatica del framework, garantizando que se puedan acceder a metodos y logica de programacion de un servicio especifico desde multiples componentes.

**Prompt 8.**

```
@workspace Necesito que construyas un archivo de servicios llamado movie-service, este archivo debe contener las operaciones CRUD necesarias para manipular la informacion de las peliculas. No utilices RxJS. Recuerda que implementamos un API mediante json-server cuya URL es: http://localhost:3000/movies
```

**Resultado esperado.**

- Se genera un archivo de servicios conteniendo la logica de las operaciones CRUD a través del API Rest generada mediante json-server

> **NOTA: RxJS**
>
> Se omite el uso de RxJS de forma especifica, porque comunmente se utiliza esta libreria para manejar el flujo de los datos de forma reactiva en Angular, sin embargo, el uso de RxJS esta fuera del alcance de este práctico.

#### Implementacion del servicio movies-service en el componente Home

**Prompt 9.**

```
@workspace Implementa el servicio #file:movie.service.ts en el componente #file:home.component.ts. Aqui debemos implementar concretamente el llamado al metodo de listado de todas las peliculas.
```

**Resultado esperado.**

- Este prompt, generará la estructura de implementación del metodo `getMovies` existente en el servicio `movies.service`.

Llegados a este punto, podemos realizar una prueba del servicio utilizando el comando `ng serve` para correr la aplicacion web dentro del navegador y visualizar el listado de peliculas. En caso de error nos apoyaremos con github copilot para solventarlo.

### 9. Ajustando el componente Movies Card

En este paso, tomaremos como referencia los atributos principales que se encuentran en cada elemento de película en el archivo **movies.db.json**, Los cuales son: `thumbnail`, `name`, `year`, `score`, `genres`.

El objetivo es usar GitHub Copilot para mejorar el diseño del componente card, de forma que su apariencia sea mejore y sea mucho mas atractivo visualmente.

**Prompt 10.**

```
@workspace Necesito que modifiques el #file:home.component.html #file:movie-card.component.ts incorporando los parametros thubmnail, name, year, score y genres. Los cuales existen en la interfaz #file:movie.ts. A su vez quiero que el string de genres, lo dividas por cada genero y utilices el componente "Chips" de Angular Material para representar cada genero.
```

Para reducir la cantidad de parametros y atributos, le solicitamos a GitHub Copilot que implemente para el componente MovieCard la interfaz `Movie` como objeto de entrada. Asi solamente pasamos una unica propiedad en lugar de varias.

**Prompt 11.**

```
@workspace Modifica el componente #file:movie-card.component.html #file:movie-card.component.ts para que en lugar de recibir parametro por parametro, reciba directamente un objeto del tipo #file:movie.ts
```

Le pedimos nuevamente ayuda a Copilot para algunos ajustes adicionales a nivel estetico, en este caso, le pediremos que nos ayude a ensanchar mas las columnas y por ende las cards que tenemos en nuestro componente Home.

**Prompt 12.**

```
@workspace Como puedo volver mas anchas mis cards? #file:home.component.html #file:movie-card.component.html
```

**Resultado esperado:**

- El componente cards ocupa un espacio uniforme y adaptado a lo largo del layout de grilla en la vista del browser.
- El componente ahora recibe directamente un unico parametro del tipo `Movie` en lugar de recibir un multiple numero de propiedades.

### 10. Generando componente de detalle: Movie

Necesitamos generar ahora un componente que permita la visualización de las películas con su completo detalle. Es por eso que le pediremos a GitHub Copilot que nos ayude en la generación de un componente llamado MovieComponent.

Este componente deberá mostrar toda la información con el detalle de cada película. Para ello debemos indicarle a GitHub Copilot que utilizaremos Angular Material y que nos genere un layout utilizando los componentes.

**Prompt 13.**

```
`@workspace Necesito que construyas un nuevo componente de Angular llamado Movie, este componente tiene como objetivo visualizar el completo detalle de una pelicula, debes utilizar la estructura del archivo #file:movies.db.json como base para las propiedades que debes generar. En cuanto al layout HTML sugeriria que generes una serie de elementos que incluyan una vista del thumbnail en la parte izquierda del componente y todos los demas atributos queden dentro de un layout aparte del lado derecho. Igual este componente va a estar sujeto a modificaciones que te indicare mas adelante. Este componente sera cargado bajo una nueva ruta que tiene la siguiente forma: http://localhost:4200/movie/:id, por lo que es necesario definir una nueva ruta dentro de la aplicacion para este compoente.
```

El siguiente paso, en caso de no haberlo sugerido, es indicarle a GIthub Copilot que necesitamos que desde el componente `MovieCard` redirijamos hacia el componente movie al hacer click en el boton de "mas info". Asi que mediante un prompt le pediremos que se incluya dicha funcionalidad.

```
@workspace Necesito que incluyas el codigo y la logica necesaria para que al hacer click en el boton "mas info" del componente #file:movie-card.component.html se haga una redireccion al componente de #file:movie.component.html cargando los detalles completos de la pelicula seleccionada
```

#### Ajustando un poco la vista del componente.

**Hacer que la imagen ocupe la mitad del componente**:
Haremos que Copilot modifique el tamaño de la imagen por nosotros al pedirle que la mitad izquierda del componente sea ocupada por la imagen del poster de la pelicula.

```
@workspace Modifica el componente #file:movie.component.html para que la imagen de la pelicula ocupe el tamaño justo a nivel de altura del area disponible en el navegador, sin perder la proporcion de la imagen.
```

### 11. Retos propuestos.

A este punto hemos logrado finalizar el practico y visto como GitHub Copilot nos ha ayudado a construir una aplicacion de Angular sencilla, sin embargo puede exapndirse mas el abanico de funcionalidades que se pueden implementar. A continuación se deja una serie de retos propuestos para ser completados por el equipo en el tiempo restante disponible.

1. Implementar el resto de operaciones CRUD: Con ayuda de copilot, desarrollar la logica y componentes necesarios para realizar la carga, la actualizacion y eliminacion de peliculas dentro de la aplicacion.

2. Implementar un filtrado: Construir un componente que permita filtrar el listado de peliculas en base a ciertas categorias como `Año`, `Genero`, `Estudio`, etc.

3. Implementar pruebas unitarias para las funcionalidades de los servicios y probar que los metodos funcionan correctamente.

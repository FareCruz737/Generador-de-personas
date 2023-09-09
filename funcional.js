const prueba = document.querySelector('.prueba'); 
const nombres = document.querySelector('.nombres'); 
const years = document.querySelector('.years');
const pais_div = document.querySelector('.pais');  

const boton = document.getElementById('generar'); 
boton.addEventListener('click', conector); 


var personas = [

    "Ramos", "Juan", "Alexander", "Abrahan", "San pedro",
    "Juan",
    "Carlos",
    "Luis",
    "José",
    "Antonio",
    "Alejandro",
    "Pedro",
    "Manuel", 
    "Fernando",
    "Javier",
    "María",
    "Ana",
    "Laura",
    "Isabel",
    "Carmen",
    "Patricia",
    "Rosa",
    "Clara",
    "Elena",
    "Sofía"
    ]

var pais = [ 

"Dominicanno", 
"Mexicano", 
"Panama", 
"Venezuela", 
"Brazil", 
"Argentina",
"Colombia",
"Chile",
"Perú",
"Ecuador",
"Bolivia",
"Paraguay",
"Uruguay",
"Costa Rica",
"Guatemala",
"Honduras",
"El Salvador",
"Nicaragua",
"Belice",
"Canadá",
"Estados Unidos",
"Canadá",
"Cuba",
"Jamaica",
"Haití",
"Bahamas",
"Trinidad y Tobago",
"Guyana",
"Surinam",
"Guyana Francesa",
"Colombia",
"Guyana",
"Surinam",
"Guayana Francesa",
"Surinam",
"Guayana Francesa",
"Barbados",
"Granada",
"San Vicente y las Granadinas",
"Santa Lucía",
"Antigua y Barbuda",
"San Cristóbal y Nieves",
"Dominica",
"Santa Lucía",
"San Vicente y las Granadinas",
"Granada",
"Barbados",
"Trinidad y Tobago",
"Guyana",
"Surinam",
"Guayana Francesa",
"Surinam",
"Guayana Francesa",
"Aruba",
"Curazao",
"Bonaire",
"Sint Eustatius",
"Saba",
"Sint Maarten",
"Anguila",
"Montserrat",
"Islas Turcas y Caicos",
"Islas Caimán",
"Bermuda",
"Belice",
"Guatemala",
"El Salvador",
"Honduras",
"Nicaragua",
"Costa Rica"


]
    
    var edad = [
    
    2002, 
    2003, 
    2004, 
    2005, 
    2006, 2007, 2008, 2009, 2010, 2011, 2012,
     2013, 2014, 2015, 2016, 2017, 2018, 
    2019, 2020, 2021, 2022, 2023, 2024, 
    2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 
    2034, 2035, 2036, 2037, 2038, 2039,
     2040, 2041, 2042, 2043, 2044, 2045, 
     2046, 2047, 2048, 2049, 
    2050, 2051, 2052, 2053, 2054, 2055, 2056, 
    2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 
    2066, 2067, 2068, 2069, 2070,
    ]

function conector(){

const personas_ramdo = personas[Math.floor(Math.random() * personas.length)]
const fechas = edad[Math.floor(Math.random() * edad.length)]
const paises = pais[Math.floor(Math.random() * pais.length)]

document.querySelector('.nombres').innerHTML = personas_ramdo;
document.querySelector('.years').innerHTML = fechas;
document.querySelector('.pais').innerHTML = paises; 



return `${personas_ramdo} ${fechas} ${paises}`
}


for (let i = 0; i < 1; i++) {

const datos_personas = conector(); 

// document.querySelector('.prueba').innerHTML = conector(); 
console.log(datos_personas); 
console.log('funcion', conector())

}






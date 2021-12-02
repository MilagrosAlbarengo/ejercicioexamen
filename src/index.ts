//Dados estos 5 arreglos que representan las ventas semanales del primer trimentre, corresspondientes a 5 vendedores de la empresa: Camila, Franco, Sofia, Matias y Agustina, respectivamente.vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652] vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]Escribir un programa que permita determinar:Para cada vendedor mostrar su nombre y 1- su venta maxima indicando semana y mes de la misma.2- su venta minima indicando semana y mes de la misma.3- su promedio semanal de ventas.4- su promedio mensual de ventas.Entre todos los vendedores calcular:5- nombre y monto vendido del mejor vendedor de cada semana.6- nombre y suma de montos vendidos del mejor vendedor de cada mes7- nombre y suma de montos vendidos del peor vendedor de cada mes8- nombre y suma de montos vendidos de peor vendedor del trimestreTenga en cuenta que cada valor en los arreglos es la venta de una semana, y que cuatro semanas forman un mes
let vendedor1:string="Camila";
let vendedor2:string="Franco";
let vendedor3:string="Sofia";
let vendedor4:string="Matias";
let vendedor5:string="Agustina";
let ventasVendedor1:number[]=[32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let ventasVendedor2:number[]=[27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let ventasVendedor3:number[]=[20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
let ventasVendedor4:number[]=[27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let ventasVendedor5:number[]=[23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];

console.log("Las ventas del primer trimestre de "vendedor1+" "+"fueron "+ventasVendedor1);
console.log("Las ventas del primer trimestre de "vendedor2+" "+"fueron "+ventasVendedor2);
console.log("Las ventas del primer trimestre de "vendedor3+" "+"fueron "+ventasVendedor3);
console.log("Las ventas del primer trimestre de "vendedor4+" "+"fueron "+ventasVendedor4);
console.log("Las ventas del primer trimestre de "vendedor5+" "+"fueron "+ventasVendedor5);

  



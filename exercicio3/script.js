let numeros = [ 42 , 88 , 99 , 13 , 33 ]
let gatos = [ "trauminha" , "bigode" , "alice" , "ana" , "ruth" ]
let tudo = [ 1 , "um" , true , 2 , "dois" , false ]

let numerosCopia = numeros.slice()
let gatosCopia = gatos.slice()
let tudoCopia = tudo.slice()

numerosCopia.push(43)
console.log(numerosCopia)
console.log(numeros)

gatosCopia.pop()
console.log(gatos)
console.log(gatosCopia)

tudo.splice(1,1)
console.log(tudo)
console.log(tudoCopia)
// typeof é um operador que retorna o tipo de dado que
// uma variável, constante ou expressão armazena

const v = 4                         // number
const w = '4'                       // string
const x = 2 == 4                    // boolean (true ou false)
const y = [3, 'rafa', w]            // object (objetos e arrays)
const z = function calc(){}         // function

console.log(typeof u)
console.log(typeof v)
console.log(typeof w)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

// No começo pode se perguntar onde usará isso, mas no futuro, poderá voltar
// para cá pois sentirá a necessidade da utilidade que o typeof tem
// Possivelmente em momento que precisar de verificações ou validações
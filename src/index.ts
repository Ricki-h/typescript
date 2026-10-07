const numbers = [1, 0, 3, 4, 6, -2, -5];
console.log(numbers)

const filtro = (value: number) => value > 0

const numbers2 = numbers.filter(filtro)
console.log(numbers2)
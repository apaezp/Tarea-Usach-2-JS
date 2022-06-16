// Ejercicio 1 Fibonacci 0-1000

function generateFibonacci(limit) {
    const fibonacci = [0, 1];
    for (let i = 2; i <= 16; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;

}

console.log(generateFibonacci());

// Ejercicio 2 Fibonacci numberos pares 0 -1000

function generateFibonacciEven(limit) {
    const fibonacci = [0, 1];
    for (let i = 2; i <= 16; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.filter(number => number % 2 === 0);
}

console.log(generateFibonacciEven());


// Ejercicio 3 Fibonacci numberos impares 0 -1000
function generateFibonacciOdd(limit) {
    const fibonacci = [0, 1];
    for (let i = 2; i <= 16; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci.filter(number => number % 2 !== 0);
}

console.log(generateFibonacciOdd());

// Ejercicio 4 Pokemones

let pokemones = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"]

let pokemonesUpperCase = pokemones.map(pokemon => pokemon.toUpperCase());


console.log(pokemonesUpperCase);

// Ejercicio 5 

let pokemons = [
    { name: "Pikachu", type: "Electric" },
    { name: "Charmander", type: "Fire" },
    { name: "Bulbasaur", type: "Grass" },
    { name: "Squirtle", type: "Water" },
    { name: "Charmeleon", type: "Fire" },
    { name: "Weedle", type: "Bug" },
    { name: "Charizard", type: "Fire" }

]

let firePokemons = pokemons.filter(pokemon => pokemon.type === "Fire");
console.log(firePokemons);








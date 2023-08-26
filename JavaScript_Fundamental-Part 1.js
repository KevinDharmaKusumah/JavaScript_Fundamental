// Values & Variable
let countryLet = "Indonesia";
let continentLet = "Asia";
let population = 48;
console.log(countryLet);
console.log(continentLet);
console.log(population);

// Data Types
let isIslandLet = true;
let language;
console.log(typeof isIslandLet);
console.log(typeof population);
console.log(typeof countryLet);
console.log(typeof language);

// let, const and var
language = "Bahasa";
const country = "Indonesia";
const continent = "Asia"
const isIsland = true;

// Basic Operators
console.log(population / 2);
population++;
console.log(population)
console.log(population > 6);
console.log(population < 33);
const description1 =
    country +
    ' is in ' +
    continent +
    ' and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description1);

// Strings and Template Literals
const description = ` ${country} is in ${continent}, and it's ${population} million people speak ${language}`;

// Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million below average`
    );
};

// Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17')  // -> '617'
console.log('19' - '13' + 17)  // -> 23
console.log('123' < 57)  // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2)  // -> 1143

// Equality Operators: == vs. ===
const numNeighbours = Number(
    prompt('How many neighbour countires does your country have?'),
);

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

// Logical Operators
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// The switch Statement
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// The Conditional (Ternary) Operator
console.log(
    `${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,
);

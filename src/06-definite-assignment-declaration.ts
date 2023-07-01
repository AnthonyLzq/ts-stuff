// Using the definite assignment operator "!" to tell TypeScript that a variable
// will be assigned a value at some point in the future.
// Also with this we will avoid the error:
// Variable 'dice' is used before being assigned.
let dice!: number

const rollDice = () => {
  dice = Math.floor(Math.random() * 6) + 1
}

rollDice()

console.log('🚀 ~ file: 06-definite-assignment-declaration.ts:9 ~ dice:', dice)

// Another example:
class Point {
  x!: number
  y!: number

  constructor() {
    this.moveRandom()
  }

  moveRandom() {
    this.x = Math.random()
    this.y = Math.random()
  }
}

const point = new Point()
console.log(
  '🚀 ~ file: 06-definite-assignment-declaration.ts:32 ~ point:',
  point
)

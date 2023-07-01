// To distinguish between different types of objects, we can use a type property
// in each object that is unique to that object. This is called a
// "discriminated union".

// Here we are using the "kind" property to distinguish between the two types.
type Square = {
  kind: 'square'
  size: number
}

type Rectangle = {
  kind: 'rectangle'
  width: number
  height: number
}

// So when we union these two types, TypeScript can tell which type is which
// based on the "kind" property.
type Shape = Square | Rectangle

// We can then use a switch statement to determine which type we are dealing
// with and TypeScript will narrow the type for us.
const area = (shape: Shape) => {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size
    case 'rectangle':
      return shape.width * shape.height
  }
}

const square: Square = {
  kind: 'square',
  size: 10
}
const squareArea = area(square)
console.log('🚀 ~ file: 08-discriminated-union.ts:28 ~ squareArea:', squareArea)

const rectangle: Rectangle = {
  kind: 'rectangle',
  width: 10,
  height: 20
}
const rectangleArea = area(rectangle)
console.log(
  '🚀 ~ file: 08-discriminated-union.ts:37 ~ rectangleArea:',
  rectangleArea
)

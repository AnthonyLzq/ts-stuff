type Point = {
  x: number
  y: number
  z: number
}

type ReadOnly<T> = {
  readonly [Item in keyof T]: T[Item]
}

const point: ReadOnly<Point> = {
  x: 1,
  y: 2,
  z: 3
}

point.x = 10 // Error: Cannot assign to 'x' because it is a read-only property.

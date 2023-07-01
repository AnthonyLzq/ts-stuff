type Add = {
  (a: number, b: number): number
  (a: number, b: number, c?: number): number
  debugName?: string
}

const add: Add = (a: number, b: number, c?: number) => {
  return a + b + (c != null ? c : 0)
}
add.debugName = 'add'
console.log('🚀 ~ file: 02-call-signatures.ts:11 ~ add:', add)

type PointCreator = {
  new (x: number, y: number): { x: number; y: number }
  new (x: number, y: number, z?: number): { x: number; y: number; z?: number }
}

const Point: PointCreator = class {
  constructor(x: number, y: number)
  constructor(x: number, y: number, z: number)
  // eslint-disable-next-line no-useless-constructor
  constructor(public x: number, public y: number, public z?: number) {}
}
const point = new Point(1, 2)
console.log('🚀 ~ file: 02-call-signatures.ts:22 ~ point:', point)

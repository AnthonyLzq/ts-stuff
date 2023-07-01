function reverseSorted(array: readonly number[]): number[] {
  // This is not allowed because the array is readonly
  // return array.sort().reverse()

  return array.concat().sort().reverse()
}

const start = [1, 2, 3, 4, 5]
console.log('🚀 ~ file: 03-readonly-arrays-and-tuples.ts:12 ~ start:', start)

const result = reverseSorted(start)
console.log('🚀 ~ file: 03-readonly-arrays-and-tuples.ts:15 ~ result:', result)

type Point = readonly [number, number]

function move(point: Point, x: number, y: number) {
  // This is not allowed because the array is readonly
  // point[0] += x
  // point[1] += y

  return [point[0] + x, point[1] + y] as Point
}

const p1: Point = [1, 2]
console.log('🚀 ~ file: 03-readonly-arrays-and-tuples.ts:25 ~ p1:', p1)

const p2 = move(p1, 10, 20)
console.log('🚀 ~ file: 03-readonly-arrays-and-tuples.ts:28 ~ p2:', p2)

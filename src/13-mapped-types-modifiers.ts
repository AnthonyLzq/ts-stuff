type Point = {
  readonly x: number
  y?: number
}

type MappedType<T> = {
  // The as keyword is used to assign a new key to the mapped type, based on the
  // original key. In this case, we are adding the mutable prefix to the key.
  // The & operator is used to create a string literal type.
  // The -? operator is used to remove the optional modifier from the key.
  // The -readonly operator is used to remove the readonly modifier from the key.
  -readonly [Item in keyof T as `mutable ${string & Item}`]-?: T[Item]
}

type MappedTypePoint = MappedType<Point>

const point: MappedTypePoint = {
  'mutable x': 1,
  'mutable y': 2
}
console.log('🚀 ~ file: 13-mapped-types-modifiers.ts:16 ~ point:', point)

type Partial<T> = {
  [Item in keyof T]?: T[Item]
}

class State<T> {
  // eslint-disable-next-line no-useless-constructor
  constructor(public current: T) {}

  getState(): T {
    return this.current
  }

  setState(newState: Partial<T>): void {
    this.current = { ...this.current, ...newState }
  }
}

const state = new State<Point>({ x: 1, y: 2 })
console.log(
  '🚀 ~ file: 13-mapped-types-modifiers.ts:42 ~ state:',
  state.getState()
)

state.setState({ x: 10 })
console.log(
  '🚀 ~ file: 13-mapped-types-modifiers.ts:48 ~ state:',
  state.getState()
)

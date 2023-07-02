type Math = {
  double(): void
  half(): void
}

// Here we are using the explicit this parameter to tell the compiler that the
// this value will be an object with a value property of type number.
const math: Math = {
  double(this: { value: number }) {
    this.value *= 2
  },
  half(this: { value: number }) {
    this.value /= 2
  }
}
const obj = { value: 2, ...math }
obj.double()
console.log('🚀 ~ file: 17-thistype-utility.ts:17 ~ obj:', obj)

// However we can use the this type to infer the type of the this value.
const math2: Math & ThisType<{ value: number }> = {
  // Here we don't need to use the this parameter explicitly
  double() {
    this.value *= 2
  },
  // Neither here
  half() {
    this.value /= 2
  }
}

const obj2 = { value: 2, ...math2 }
obj2.double()
console.log('🚀 ~ file: 17-thistype-utility.ts:34 ~ obj2:', obj2)

type StateDescription<Data, Methods> = {
  data: Data
  methods: Methods & ThisType<Data & Methods>
}

function createState<Data, Methods>(
  description: StateDescription<Data, Methods>
): Data & Methods {
  return { ...description.data, ...description.methods }
}

const state = createState({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx
      this.y += dy
    }
  }
})
const { x, y } = state
console.log('🚀 ~ file: 17-thistype-utility.ts:57 ~ x, y:', x, y)
state.moveBy(1, 2)
const { x: x2, y: y2 } = state
console.log('🚀 ~ file: 17-thistype-utility.ts:60 ~ x2, y2:', x2, y2)

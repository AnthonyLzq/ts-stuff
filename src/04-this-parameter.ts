function double(this: { value: number }) {
  this.value = this.value * 2
}

const valid = {
  value: 10,
  double
}

valid.double()
console.log('🚀 ~ file: 04-this-parameter.ts:11 ~ valid.value:', valid.value)

// This will throw an error
// const invalid1 = {
//   value: 10,
//   double: () => {
//     this.value = this.value * 2
//     // The containing arrow function captures the global value of 'this'.
//     // Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.
//   }
// }

// This also will throw an error
// const invalid2 = {
//   valor: 10,
//   double
// }

// invalid2.double()
// The 'this' context of type '{ valor: number; double: (this: { value: number; }) => void; }' is not assignable to method's 'this' of type '{ value: number; }'.
// Property 'value' is missing in type '{ valor: number; double: (this: { value: number; }) => void; }' but required in type '{ value: number; }'.

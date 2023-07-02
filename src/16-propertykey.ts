// In JavaScript only strings, numbers and symbols can be keys of an object.
// If we need to use a valid property key type in TypeScript, we can use the
// PropertyKey type.
type CustomPropertyKey = keyof any
// This is the same as:
type CustomPropertyKey2 = string | number | symbol
// Which is also provided by TypeScript.
let propertyKey: PropertyKey
propertyKey = 'name'
propertyKey = 1
propertyKey = Symbol('name')
propertyKey = true // This is not a valid property key

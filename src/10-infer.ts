type IsArrayBasic<T> = T extends Array<any> ? 'array' : 'other'

type WithArray = IsArrayBasic<number[]>
type WithoutArray = IsArrayBasic<number>

// The infer keyword allows us to store the type of a generic type parameter.
// Here we are storing the type of the first type parameter of the Array type.
type UnboxArray<T> = T extends Array<infer ArrayMember> ? ArrayMember : T

type Unboxed1 = UnboxArray<number[]>
type Unboxed2 = UnboxArray<string>

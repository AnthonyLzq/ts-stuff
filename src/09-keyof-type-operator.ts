type Person = {
  firstName: string
  lastName: string
  age: number
}

const john: Person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
}

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key]
  console.log('Getting:', key, value)

  return value
}

const age = logGet(john, 'age')
console.log('🚀 ~ file: 09-keyof-type-operator.ts:21 ~ age:', age)

function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  console.log('Setting:', key, value)
  obj[key] = value
}

logSet(john, 'age', 31)

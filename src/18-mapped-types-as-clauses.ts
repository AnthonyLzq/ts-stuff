/**
 * The above type defines a mapping of setter functions for each property in a
 * given state object.
 * @property [: undefined] - The `Setters<State>` type is a mapped type that
 * generates a set of setter functions based on the properties of the `State`
 * type.
 */
type Setters<State> = {
  [Property in keyof State & string as `set${Capitalize<Property>}`]: (
    value: State[Property]
  ) => void
}

/**
 * The above type defines a set of getter functions for accessing properties of a
 * given state object.
 * @property [: undefined] - The `Getters<State>` type is a mapped type that
 * generates getter methods for each property in the `State` type. The generated
 * getter methods have names in the format `getPropertyName`, where `PropertyName`
 * is the capitalized version of the property name.
 */
type Getters<State> = {
  [Property in keyof State &
    string as `get${Capitalize<Property>}`]: () => State[Property]
}

type Store<State> = Setters<State> & Getters<State>

type Person = {
  name: string
  age: number
}

type PersonStore = Store<Person>

const person: Person = {
  name: 'Jane',
  age: 42
}
console.log('🚀 ~ file: 18-mapped-types-as-clauses.ts:40 ~ person:', person)

const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1)

function createStore<State extends { [key: string]: unknown }>(
  state: State
): Store<State> {
  return {
    ...Object.keys(state).reduce((setters, key) => {
      const newSetter =
        typeof key === 'string'
          ? {
              [`set${capitalize(key)}`]: (value: State[typeof key]) => {
                state[key as keyof State] = value
              }
            }
          : {}

      return {
        ...setters,
        ...newSetter
      }
    }, {} as Setters<State>),
    ...Object.keys(state).reduce(
      (getters, key) => ({
        ...getters,
        [`get${capitalize(key)}`]: () => state[key]
      }),
      {} as Getters<State>
    )
  }
}

const personStore: PersonStore = createStore(person)
personStore.setName('John')
console.log('🚀 ~ file: 18-mapped-types-as-clauses.ts:74 ~ person:', person)

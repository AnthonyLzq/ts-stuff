import { faker } from '@faker-js/faker'

type Person = {
  firstName: string
  dateOfBirth?: Date
}

const loadPerson = () => {
  const person: Person = {
    firstName: faker.person.firstName()
  }
  const dateOfBirth = faker.date.past()
  if (Math.random() > 0.5) person.dateOfBirth = dateOfBirth

  return Math.random() > 0.5 ? person : null
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message)
}

const maybePerson = loadPerson()
assert(maybePerson !== null, 'Failed to load person')
console.log(
  '🚀 ~ file: 07-assertion-functions.ts:24 ~ maybePerson.firstName:',
  maybePerson.firstName
)

function assertDate(date: unknown): asserts date is Date {
  if (!(date instanceof Date)) throw new Error('Not a date')
}

assertDate(maybePerson.dateOfBirth)
console.log(
  '🚀 ~ file: 07-assertion-functions.ts:34 ~ maybePerson.dateOfBirth:',
  maybePerson.dateOfBirth
)

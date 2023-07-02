// With this conditional type, we can remove null and undefined from a type.
// Due the fact that never is a subtype of all types, the compiler will remove
// the never type from the union.
type NoEmpty<T> = T extends null | undefined ? never : T

type NoEmpty1 = NoEmpty<string | null | undefined>
type NoEmpty2 = NoEmpty<string | null | undefined | number>

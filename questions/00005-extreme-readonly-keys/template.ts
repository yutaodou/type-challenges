// check if two type is same with each other. Should be builtin utility type!
type Equal<T, R> = (<J>(J: J) => J extends T ? 1 : 2) extends <J>(
  J: J
) => J extends R ? 1 : 2
  ? true
  : false

// check if an property is readonly, interesting!!!
type GetReadonlyKeys<T extends Record<string, any>> = keyof {
  [K in keyof T as Equal<
    { [P in K]: T[P] },
    {
      readonly [P in K]: T[P]
    }
  > extends true
    ? K
    : never]: T[K]
}

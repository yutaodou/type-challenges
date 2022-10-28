type MyOmit<T, K extends keyof T> = {
  [Key in Exclude<keyof T, K>]: Key extends K ? never : T[Key]
}

type MyReturnType<T> = T extends (...args) => infer A ? A : never

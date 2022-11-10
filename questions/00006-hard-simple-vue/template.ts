type Computed<D, C> = {
  [key in keyof C]: (this: D) => C[key]
}

declare function SimpleVue<D, C, M>(options: {
  data: (this: void) => D
  computed: Computed<D, C>
  methods: M & ThisType<D & C & M>
}): any

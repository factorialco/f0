export type DeepOmit<
  TObject,
  TKey extends string,
> = TKey extends `${infer TKeyFirst}.${infer TKeyRest}`
  ? {
      [k in keyof TObject]: k extends TKeyFirst
        ? DeepOmit<TObject[k], TKeyRest>
        : TObject[k]
    }
  : Omit<TObject, TKey>

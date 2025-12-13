export type AllOrNone<T extends object> =
  | Required<T>
  | {
      [K in keyof T]?: undefined
    }

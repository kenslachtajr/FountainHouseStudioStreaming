// Pretty print utility for merged types
export type Prettify<T> = {
  [K in keyof T]: T[K];
};

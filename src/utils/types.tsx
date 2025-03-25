// types used for Crud operations
export type RequestOptions =
  | { method: "get"; body?: never }
  | { method: "post"; body: object };

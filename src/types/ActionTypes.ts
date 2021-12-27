import * as actionCreators from '../store/action/creator';

// https://habr.com/ru/company/alfa/blog/452620/
type InferValueTypes<T> = T extends Record<string, infer U> ? U : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actionCreators>>;

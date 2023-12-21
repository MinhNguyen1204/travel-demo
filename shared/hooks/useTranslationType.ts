import { useTranslation } from "next-i18next";

import _common from "@public/locales/en/common.json";

type dict = typeof _common;

// returns the property value from object O given property path T
type GetDictValue<T extends string, O> =
  T extends `${infer A}.${infer B}`
  ? A extends keyof O
  ? GetDictValue<B, O[A]>
  : never
  : T extends keyof O
  ? O[T]
  : never;

type DeepKeys<T> = T extends object
  ? {
    [K in keyof T]-?: `${K & string}` | Concat<K & string, DeepKeys<T[K]>>;
  }[keyof T]
  : "";

type Concat<K extends string, P extends string> = `${K}${"" extends P
  ? ""
  : "."}${P}`;

export const useTypedTranslation = (): {
  t: <P extends DeepKeys<dict>>(p: P) => GetDictValue<P, dict>;
} => {
  const { t } = useTranslation();
  // implementation goes here: join keys by dot (depends on your config)
  // and delegate to lib t
  const tTrans = <P extends DeepKeys<dict>>(
    p: P
  ): GetDictValue<P, dict> => {
    return t(p) as GetDictValue<P, dict>;
  };
  return {
    t: tTrans,
  };
};

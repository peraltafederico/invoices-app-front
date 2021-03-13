import 'styled-theming'

declare module 'styled-theming' {
  declare namespace theme {
    type ThemeValueResult =
      | string
      | FlattenInterpolation<ThemeProps<any>>
      | FlattenInterpolation<ThemedStyledProps<any, any>>
    type ThemeValueFn = (props: any) => ThemeValueResult
    type ThemeValue = ThemeValueFn | ThemeValueResult

    interface ThemeMap {
      [key: string]: ThemeValue
    }

    type VariantMap<TVariant extends string> = {
      [key in TVariant]: ThemeMap
    }

    type ThemeSet = (props: any) => string
    type VariantSet<TProp extends string, TVariant extends string> = (
      props: { [key in TProp]?: TVariant }
    ) => string

    function variants<TProp extends string, TVariant extends string>(
      name: string,
      prop: TProp,
      values: VariantMap<TVariant>
    ): VariantSet<TProp, TVariant>
  }
}

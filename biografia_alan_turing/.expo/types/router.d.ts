/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/../components/Header/Header`; params?: Router.UnknownInputParams; } | { pathname: `/../components/Image/Image`; params?: Router.UnknownInputParams; } | { pathname: `/../components/Topics/Topic`; params?: Router.UnknownInputParams; } | { pathname: `/../components/Img/Img`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/../components/Header/Header`; params?: Router.UnknownOutputParams; } | { pathname: `/../components/Image/Image`; params?: Router.UnknownOutputParams; } | { pathname: `/../components/Topics/Topic`; params?: Router.UnknownOutputParams; } | { pathname: `/../components/Img/Img`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/../components/Header/Header${`?${string}` | `#${string}` | ''}` | `/../components/Image/Image${`?${string}` | `#${string}` | ''}` | `/../components/Topics/Topic${`?${string}` | `#${string}` | ''}` | `/../components/Img/Img${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/../components/Header/Header`; params?: Router.UnknownInputParams; } | { pathname: `/../components/Image/Image`; params?: Router.UnknownInputParams; } | { pathname: `/../components/Topics/Topic`; params?: Router.UnknownInputParams; } | { pathname: `/../components/Img/Img`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}

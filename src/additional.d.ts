// more declarations
declare module '*.svg' {
  /**
   * Use `any` to avoid conflicts with
   * `@svgr/webpack` plugin or
   * `babel-plugin-inline-react-svg` plugin.
   */
  import React from 'react';
  const Component: React.FunctionComponent<React.SVGProps<SVGAElement>>;
  export default Component;
}

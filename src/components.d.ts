/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface JfdkhLink {
    'link': string;
    'text': string;
  }
  interface MyFirstComponent {
    'link': string;
    'name': string;
  }
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLJfdkhLinkElement extends Components.JfdkhLink, HTMLStencilElement {}
  var HTMLJfdkhLinkElement: {
    prototype: HTMLJfdkhLinkElement;
    new (): HTMLJfdkhLinkElement;
  };

  interface HTMLMyFirstComponentElement extends Components.MyFirstComponent, HTMLStencilElement {}
  var HTMLMyFirstComponentElement: {
    prototype: HTMLMyFirstComponentElement;
    new (): HTMLMyFirstComponentElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'jfdkh-link': HTMLJfdkhLinkElement;
    'my-first-component': HTMLMyFirstComponentElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface JfdkhLink {
    'link'?: string;
    'text'?: string;
  }
  interface MyFirstComponent {
    'link'?: string;
    'name'?: string;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'jfdkh-link': JfdkhLink;
    'my-first-component': MyFirstComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'jfdkh-link': LocalJSX.JfdkhLink & JSXBase.HTMLAttributes<HTMLJfdkhLinkElement>;
      'my-first-component': LocalJSX.MyFirstComponent & JSXBase.HTMLAttributes<HTMLMyFirstComponentElement>;
    }
  }
}



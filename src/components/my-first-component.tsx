import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-first-component',
})
export class MyComponent {

  // Indicate that name should be a public property on the component
  @Prop() name: string;
  @Prop() link: string;

  render() {
    return (
      <p>
        My name is {this.name}
      </p>
    );
  }
}
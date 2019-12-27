import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'jfdkh-link',
  styleUrl: 'jfdkh-link.scss',
  shadow: true
})
export class MyComponent {

  // Indicate that name should be a public property on the component
  @Prop() link: string;
  @Prop() text: string;

  render() {
    return (
      <a href={this.link}>
          {this.text}
      </a>
    );
  }
}
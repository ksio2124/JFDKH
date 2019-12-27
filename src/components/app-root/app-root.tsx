import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  
  render() {
    const links = [
      'https://www.cnbc.com/2019/12/27/jeffrey-epstein-friend-ghislaine-maxwell-under-fbi-investigation.html',
      'https://www.theguardian.com/us-news/2019/dec/27/ghislaine-maxwell-jeffrey-epstein-fbi-investigation',
      'https://www.washingtonexaminer.com/news/fbi-investigating-jeffrey-epstein-facilitator-ghislaine-maxwell'
    ];
    return (
      <div>
        <header>
          <h1>Jeffrey Epstein Did Not Kill Himself</h1>
        </header>
        {links.map( (link, index) => (
          <jfdkh-link link={link} text={`Jeff ${index}`}> </jfdkh-link>
        ))}
        
      </div>
    );
  }
}

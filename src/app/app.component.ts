import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Je parle de tout et de rien!'
    },
    {
      title: 'Mon deuxième post',
      content: 'Je parle de tout et de rien!'
    },
    {
      title: 'Mon dernier post',
      content: 'Je parle de tout et de rien!'
    }
  ];
}

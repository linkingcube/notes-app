import { Component } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  note:Note = {
    title: 'note title',
    body: 'note body',
    id: 1234,
    createdAt: 'today', 
    updatedAt: 'today'
  }
}

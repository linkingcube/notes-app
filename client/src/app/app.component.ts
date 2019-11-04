import { Component } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private noteService: NoteService){}
  
  public notesTrackBy(i: number, note: Note) {
    return note.id;
  }
}

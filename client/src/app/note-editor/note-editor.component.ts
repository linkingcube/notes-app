import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent {

  public noteForm: FormGroup;
  private titleMaxLength = 255;
  private bodyMaxLength = 1024;

  public get title() {
    return this.noteForm.get('title');
  }

  public get body() {
    return this.noteForm.get('body');
  }

  constructor(private fb: FormBuilder, private noteService: NoteService) {
    this.noteForm = this.fb.group({
      'title': new FormControl('', [
        Validators.required,
        Validators.maxLength(this.titleMaxLength)
      ]),
      body: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.bodyMaxLength)
      ])
    });
  }

  public addNote() {
    this.noteService.addNote({
      body: this.noteForm.value.body,
      title: this.noteForm.value.title
    });
    console.log(this.noteForm.value);
  }
}

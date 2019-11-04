import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesSubject: BehaviorSubject<Note[]>;
  public notes$: Observable<Note[]>;

  constructor() {
    this.notesSubject = new BehaviorSubject<Note[]>([]);
    this.notes$ = this.notesSubject.asObservable();
  }

  public get notes(): Note[] {
    return this.notesSubject.getValue();
  }

  public set notes(collection: Note[]) {
    this.notesSubject.next(collection);
  }

}

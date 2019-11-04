import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesSubject: BehaviorSubject<Note[]>;
  public notes$: Observable<Note[]>;
  private baseUrl: string;
  private notesPath: string;

  constructor(private http: HttpClient) {
    this.notesSubject = new BehaviorSubject<Note[]>([]);
    this.notes$ = this.notesSubject.asObservable();
    this.baseUrl = environment.apiBaseUrl;
    this.notesPath = environment.notesPath;
    this.hydrate();
  }

  public get notes(): Note[] {
    return this.notesSubject.getValue();
  }

  public set notes(collection: Note[]) {
    this.notesSubject.next(collection);
  }

  public async addNote(newNote: Pick<Note, 'title' | 'body'>) {
    const url = `${this.baseUrl}${this.notesPath}`;
    const note = await this.http.post<Note>(url, newNote).toPromise();
    this.notes = [
      ...this.notes,
      note
    ].sort((a, b) => {
      return a.updatedAt.valueOf() > b.updatedAt.valueOf() ? 1 : -1;
    });
  }

  private async hydrate() {
    const url = `${this.baseUrl}${this.notesPath}`;
    const notes = await this.http.get<Note[]>(url).toPromise();
    this.notes = notes;
  }

}

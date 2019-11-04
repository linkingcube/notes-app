import { Note } from '../models/note';

export class NotesController {

    public static notes= new Map<number, Note>(); 

    constructor() {
    }

    public getAllNotes() {
        const values = NotesController.notes.values();
        return Array.from(values);
    }

    public addNote(note: Pick<Note, 'title' | 'body'>) {
        const id = Date.now();
        const now = (new Date()).toISOString();
        NotesController.notes.set(id, {
            ...note,
            id,
            createdAt: now,
            updatedAt: now
        });        
        return NotesController.notes.get(id);
    }
}
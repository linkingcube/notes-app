import { NotesController } from './note.controller';
import { Note } from '../models/note';

describe('Notes controller', () => {
    beforeEach(() => {
        NotesController.notes.clear();
    });

    it('Should get all notes', () => {
        const controller = new NotesController();
        const noteId = 123;
        const note: Note = {
            title: 'note title',
            body: 'the note',
            id: noteId,
            createdAt: 'today',
            updatedAt: 'today'
        };
        NotesController.notes.set(noteId, note);

        const notes = controller.getAllNotes();
        expect(notes.length).toEqual(1);
        expect(notes[0].id).toEqual(noteId);
    });

    it('Should add note', () => {
        const controller = new NotesController();
        let notes = controller.getAllNotes();
        expect(notes.length).toEqual(0);
        controller.addNote({
            title: 'note title',
            body: 'the note'
        });
        notes = [...NotesController.notes.values()];
        expect(notes.length).toEqual(1);
    });

    it('Should set id, create and update dates when add note', () => {
        const controller = new NotesController();
        let notes = controller.getAllNotes();
        expect(notes.length).toEqual(0);
        controller.addNote({
            title: 'note title',
            body: 'the note'
        });
        notes = [...NotesController.notes.values()];
        expect(notes.length).toEqual(1);
        const note = notes[0];
        expect(note.id).toBeDefined();
        expect(note.createdAt).toBeDefined();
        expect(note.updatedAt).toBeDefined();
    });
});
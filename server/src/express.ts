import { Body, Get, Post, Route } from 'tsoa';
import { NotesController } from './controllers/note.controller';
import { Note } from './models/note';

@Route('Notes')
export class NotesRouter {

    constructor(private controller: NotesController = new NotesController()) {

    }

    @Get()
    public async getAllNotes(): Promise<Note[]> {
        return this.controller.getAllNotes();
    }

    @Post()
    public async addNote(@Body() note: Pick<Note, 'title' | 'body'>): Promise<Note> {
        return this.controller.addNote(note);
    }
}

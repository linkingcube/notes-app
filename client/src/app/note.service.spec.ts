import { TestBed } from '@angular/core/testing';

import { NoteService } from './note.service';

describe('NoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteService = TestBed.get(NoteService);
    expect(service).toBeTruthy();
  });

  it('should add note', () => {
    const service: NoteService = TestBed.get(NoteService);
    service.notes.push({
      title: 'note title',
      body: 'note body',
      id: 123,
      createdAt: (new Date()).toISOString(),
      updatedAt: (new Date()).toISOString()
    });
    expect(service.notes.length).toEqual(1);
  });
});



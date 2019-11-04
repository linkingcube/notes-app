import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NoteService } from './note.service';

describe('NoteService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: NoteService = TestBed.get(NoteService);
    httpMock.expectOne('http://localhost:3000/notes');
    expect(service).toBeTruthy();
  });

  it('should hydrate notes on load', () => {
    const service: NoteService = TestBed.get(NoteService);
    const req = httpMock.expectOne('http://localhost:3000/notes');
    expect(service).toBeTruthy();
    expect(req.request.method).toBe('GET');
  });

  it('should add note', () => {
    const service: NoteService = TestBed.get(NoteService);
    httpMock.expectOne('http://localhost:3000/notes');
    service.notes = [{
      title: 'note title',
      body: 'note body',
      id: 123,
      createdAt: (new Date()).toISOString(),
      updatedAt: (new Date()).toISOString()
    }];
    expect(service.notes.length).toEqual(1);
  });

  it('should post note', () => {
    const service: NoteService = TestBed.get(NoteService);
    const newNote = {
      title: 'note title',
      body: 'note body'
    };
    service.addNote(newNote);
    let [get, post] = httpMock.match('http://localhost:3000/notes');
    expect(get.request.method).toBe('GET');
    expect(post.request.method).toBe('POST');
    expect(post.request.body).toEqual(newNote);
  });
});

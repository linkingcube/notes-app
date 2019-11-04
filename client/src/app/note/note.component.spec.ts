import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Note } from '../note';
import { NoteComponent } from './note.component';


describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;
  const noteTitle = 'note title';
  const noteBody = 'note body';
  const note = {
    title: noteTitle,
    body: noteBody,
    id: 123,
    createdAt: (new Date()).toISOString(),
    updatedAt: (new Date()).toISOString()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    component.note = note;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render note', async () => {
    const fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    component.note = note;
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.note .title').textContent).toContain(noteTitle);
    expect(compiled.querySelector('.note .body').textContent).toContain(noteBody);
  });
});

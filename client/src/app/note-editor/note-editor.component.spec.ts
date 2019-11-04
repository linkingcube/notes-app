import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteEditorComponent } from './note-editor.component';


describe('NoteEditorComponent', () => {
    let component: NoteEditorComponent;
    let fixture: ComponentFixture<NoteEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NoteEditorComponent],
            imports: [
                ReactiveFormsModule,
                FormsModule,
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NoteEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should default to invalid', () => {
        expect(component.noteForm.valid).toBeFalsy();
        component.noteForm.controls['title'].setValue("Note title");
        component.noteForm.controls['body'].setValue("Note body");
        expect(component.noteForm.valid).toBeTruthy();
    })
});

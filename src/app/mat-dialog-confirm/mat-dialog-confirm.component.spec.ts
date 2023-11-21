import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogConfirmComponent } from './mat-dialog-confirm.component';

describe('MatDialogConfirmComponent', () => {
  let component: MatDialogConfirmComponent;
  let fixture: ComponentFixture<MatDialogConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMployeeComponent } from './create-mployee.component';

describe('CreateMployeeComponent', () => {
  let component: CreateMployeeComponent;
  let fixture: ComponentFixture<CreateMployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

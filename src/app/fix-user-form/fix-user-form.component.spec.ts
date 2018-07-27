import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixUserFormComponent } from './fix-user-form.component';

describe('FixUserFormComponent', () => {
  let component: FixUserFormComponent;
  let fixture: ComponentFixture<FixUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllocateProjectComponent } from './add-allocate-project.component';

describe('AddAllocateProjectComponent', () => {
  let component: AddAllocateProjectComponent;
  let fixture: ComponentFixture<AddAllocateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAllocateProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAllocateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

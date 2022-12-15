import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAllocateProjectComponent } from './update-allocate-project.component';

describe('UpdateAllocateProjectComponent', () => {
  let component: UpdateAllocateProjectComponent;
  let fixture: ComponentFixture<UpdateAllocateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAllocateProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAllocateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllocateProjectComponent } from './view-allocate-project.component';

describe('ViewAllocateProjectComponent', () => {
  let component: ViewAllocateProjectComponent;
  let fixture: ComponentFixture<ViewAllocateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllocateProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllocateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

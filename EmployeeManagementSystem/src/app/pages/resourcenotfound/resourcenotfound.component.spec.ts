import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcenotfoundComponent } from './resourcenotfound.component';

describe('ResourcenotfoundComponent', () => {
  let component: ResourcenotfoundComponent;
  let fixture: ComponentFixture<ResourcenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcenotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

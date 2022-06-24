import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegionComponent } from './edit-region.component';

describe('EditRegionComponent', () => {
  let component: EditRegionComponent;
  let fixture: ComponentFixture<EditRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProducComponent } from './list-produc.component';

describe('ListProducComponent', () => {
  let component: ListProducComponent;
  let fixture: ComponentFixture<ListProducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstanceComponent } from './list-instance.component';

describe('ListInstanceComponent', () => {
  let component: ListInstanceComponent;
  let fixture: ComponentFixture<ListInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

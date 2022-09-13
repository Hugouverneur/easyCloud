import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInstanceComponent } from './delete-instance.component';

describe('DeleteInstanceComponent', () => {
  let component: DeleteInstanceComponent;
  let fixture: ComponentFixture<DeleteInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

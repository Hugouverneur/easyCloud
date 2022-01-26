import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInstanceComponent } from './detail-instance.component';

describe('DetailInstanceComponent', () => {
  let component: DetailInstanceComponent;
  let fixture: ComponentFixture<DetailInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

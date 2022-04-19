import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DublinbikeComponent } from './dublinbike.component';

describe('DublinbikeComponent', () => {
  let component: DublinbikeComponent;
  let fixture: ComponentFixture<DublinbikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DublinbikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DublinbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

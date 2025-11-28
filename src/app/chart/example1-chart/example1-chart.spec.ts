import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example1Chart } from './example1-chart';

describe('Example1Chart', () => {
  let component: Example1Chart;
  let fixture: ComponentFixture<Example1Chart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example1Chart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example1Chart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

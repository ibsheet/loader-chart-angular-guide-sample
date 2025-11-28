import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example3Chart } from './example3-chart';

describe('Example3Chart', () => {
  let component: Example3Chart;
  let fixture: ComponentFixture<Example3Chart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example3Chart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example3Chart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example2Chart } from './example2-chart';

describe('Example2Chart', () => {
  let component: Example2Chart;
  let fixture: ComponentFixture<Example2Chart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example2Chart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example2Chart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAreaChart } from './basic-area-chart';

describe('BasicAreaChart', () => {
  let component: BasicAreaChart;
  let fixture: ComponentFixture<BasicAreaChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicAreaChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAreaChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

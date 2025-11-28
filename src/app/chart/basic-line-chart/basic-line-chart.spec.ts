import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLineChart } from './basic-line-chart';

describe('BasicLineChart', () => {
  let component: BasicLineChart;
  let fixture: ComponentFixture<BasicLineChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicLineChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicLineChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicColumnChart } from './basic-column-chart';

describe('BasicColumnChart', () => {
  let component: BasicColumnChart;
  let fixture: ComponentFixture<BasicColumnChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicColumnChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicColumnChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

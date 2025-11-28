import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBarChart } from './basic-bar-chart';

describe('BasicBarChart', () => {
  let component: BasicBarChart;
  let fixture: ComponentFixture<BasicBarChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBarChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicBarChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

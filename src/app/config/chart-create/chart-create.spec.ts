import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCreate } from './chart-create';

describe('ChartCreate', () => {
  let component: ChartCreate;
  let fixture: ComponentFixture<ChartCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

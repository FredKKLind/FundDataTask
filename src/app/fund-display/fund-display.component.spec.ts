import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDisplayComponent } from './fund-display.component';

describe('FundDisplayComponent', () => {
  let component: FundDisplayComponent;
  let fixture: ComponentFixture<FundDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

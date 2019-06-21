import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudDetectionPreventionComponent } from './fraud-detection-prevention.component';

describe('FraudDetectionPreventionComponent', () => {
  let component: FraudDetectionPreventionComponent;
  let fixture: ComponentFixture<FraudDetectionPreventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraudDetectionPreventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudDetectionPreventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

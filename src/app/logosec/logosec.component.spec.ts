import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosecComponent } from './logosec.component';

describe('LogosecComponent', () => {
  let component: LogosecComponent;
  let fixture: ComponentFixture<LogosecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

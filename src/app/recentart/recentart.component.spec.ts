import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentartComponent } from './recentart.component';

describe('RecentartComponent', () => {
  let component: RecentartComponent;
  let fixture: ComponentFixture<RecentartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

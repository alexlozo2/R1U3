import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSingletonComponent } from './dashboard-singleton.component';

describe('DashboardSingletonComponent', () => {
  let component: DashboardSingletonComponent;
  let fixture: ComponentFixture<DashboardSingletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSingletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSingletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

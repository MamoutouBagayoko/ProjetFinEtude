import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitUserComponent } from './profit-user.component';

describe('ProfitUserComponent', () => {
  let component: ProfitUserComponent;
  let fixture: ComponentFixture<ProfitUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

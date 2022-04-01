import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodemandeurComponent } from './infodemandeur.component';

describe('InfodemandeurComponent', () => {
  let component: InfodemandeurComponent;
  let fixture: ComponentFixture<InfodemandeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfodemandeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfodemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

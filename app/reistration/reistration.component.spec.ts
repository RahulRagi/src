import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReistrationComponent } from './reistration.component';

describe('ReistrationComponent', () => {
  let component: ReistrationComponent;
  let fixture: ComponentFixture<ReistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

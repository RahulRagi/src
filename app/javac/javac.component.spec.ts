import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavacComponent } from './javac.component';

describe('JavacComponent', () => {
  let component: JavacComponent;
  let fixture: ComponentFixture<JavacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

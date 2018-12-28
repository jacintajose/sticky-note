import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StikysComponent } from './stikys.component';

describe('StikysComponent', () => {
  let component: StikysComponent;
  let fixture: ComponentFixture<StikysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StikysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StikysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

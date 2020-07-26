import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MkComponentsComponent } from './mk-components.component';

describe('MkComponentsComponent', () => {
  let component: MkComponentsComponent;
  let fixture: ComponentFixture<MkComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MkComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

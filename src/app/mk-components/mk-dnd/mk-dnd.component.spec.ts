import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MkDndComponent } from './mk-dnd.component';

describe('MkDndComponent', () => {
  let component: MkDndComponent;
  let fixture: ComponentFixture<MkDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MkDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AletBoxesTextComponent } from './alet-boxes-text.component';

describe('AletBoxesTextComponent', () => {
  let component: AletBoxesTextComponent;
  let fixture: ComponentFixture<AletBoxesTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AletBoxesTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AletBoxesTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

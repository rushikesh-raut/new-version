import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assigenment1Component } from './assigenment1.component';

describe('Assigenment1Component', () => {
  let component: Assigenment1Component;
  let fixture: ComponentFixture<Assigenment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assigenment1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assigenment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

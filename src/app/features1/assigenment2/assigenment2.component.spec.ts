import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assigenment2Component } from './assigenment2.component';

describe('Assigenment2Component', () => {
  let component: Assigenment2Component;
  let fixture: ComponentFixture<Assigenment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assigenment2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assigenment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

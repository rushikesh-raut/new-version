import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplehttpComponent } from './examplehttp.component';

describe('ExamplehttpComponent', () => {
  let component: ExamplehttpComponent;
  let fixture: ComponentFixture<ExamplehttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplehttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamplehttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

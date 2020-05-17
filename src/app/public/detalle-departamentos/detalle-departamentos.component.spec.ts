import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDepartamentosComponent } from './detalle-departamentos.component';

describe('DetalleDepartamentosComponent', () => {
  let component: DetalleDepartamentosComponent;
  let fixture: ComponentFixture<DetalleDepartamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDepartamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

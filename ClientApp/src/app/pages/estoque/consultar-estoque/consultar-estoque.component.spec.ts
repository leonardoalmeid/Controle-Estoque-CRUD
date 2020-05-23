import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEstoqueComponent } from './consultar-estoque.component';

describe('ConsultarEstoqueComponent', () => {
  let component: ConsultarEstoqueComponent;
  let fixture: ComponentFixture<ConsultarEstoqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarEstoqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

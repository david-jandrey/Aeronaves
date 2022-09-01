import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeronaveListagemComponent } from './aeronave-listagem.component';

describe('AeronaveListagemComponent', () => {
  let component: AeronaveListagemComponent;
  let fixture: ComponentFixture<AeronaveListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeronaveListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeronaveListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

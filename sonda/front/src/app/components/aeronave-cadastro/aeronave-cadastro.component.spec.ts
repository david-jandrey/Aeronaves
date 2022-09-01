import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeronaveCadastroComponent } from './aeronave-cadastro.component';

describe('AeronaveCadastroComponent', () => {
  let component: AeronaveCadastroComponent;
  let fixture: ComponentFixture<AeronaveCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeronaveCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeronaveCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

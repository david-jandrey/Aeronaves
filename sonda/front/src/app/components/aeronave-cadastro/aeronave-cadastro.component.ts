import { Component, OnInit } from '@angular/core';
import { Aeronave } from 'src/app/models/aeronave';
import { AeronavesService } from 'src/app/services/aeronaves.service';

@Component({
  selector: 'app-aeronave-cadastro',
  templateUrl: './aeronave-cadastro.component.html',
  styleUrls: ['./aeronave-cadastro.component.scss']
})
export class AeronaveCadastroComponent implements OnInit {

  aeronave: Aeronave;
  cadastroSucesso: boolean = false;
  erros: String[] = [];
  constructor(private aeronavesService: AeronavesService) { 
    this.aeronave = new Aeronave();
  }

  ngOnInit(): void {
  }
  incluirAeronave(){
    this.aeronavesService.saveAeronave(this.aeronave).subscribe(response =>{
     this.cadastroSucesso = true;
     this.erros =[]
    }, error =>{
      this.erros = error;
      this.cadastroSucesso = false;
      console.log("error"+error)
    });
    
    }
}

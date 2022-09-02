import { Component, OnInit } from '@angular/core';
import { Aeronave } from 'src/app/models/aeronave';
import { AeronavesService } from 'src/app/services/aeronaves.service';

@Component({
  selector: 'app-aeronave-listagem',
  templateUrl: './aeronave-listagem.component.html',
  styleUrls: ['./aeronave-listagem.component.scss']
})
export class AeronaveListagemComponent implements OnInit {

  aeronaves: Aeronave[] | undefined;
  cadastroDeletado: boolean = false;
  aeronaveAtualizadoSucesso: boolean = false;
  botaoSalvar : boolean = false;
  disabled : boolean = false;
  aeronaves1: Array<{ id: number, nome: string,
    marca: string, ano: number, descricao: string,
     vendido: true }> = [];

  constructor(private aeronavesService: AeronavesService) { }

  ngOnInit(): void {
    this.getAeronave();
    //this.aeronavesService.listar().subscribe(retornoApi => this.aeronaves1 = retornoApi)
  }
  

  getAeronave() {
    this.aeronavesService.getAeronave().subscribe((aeronaves: Aeronave[]) => {
      this.aeronaves = aeronaves;
    });
  }

  DeleteAeronave(aeronave: Aeronave){
    this.aeronavesService.DeleteAeronave(aeronave).subscribe(response =>{
      this.getAeronave();
      this.cadastroDeletado= true;
    });
  }
  atualizarAeronave(){
    this.botaoSalvar= !this.botaoSalvar;
    this.disabled= !this.disabled;
  }
  SalvarAtualizacaoAeronave(aeronave: Aeronave){
    this.aeronavesService.updateAeronave(aeronave).subscribe( response =>{
      console.log(response)
      this.getAeronave();
      this.aeronaveAtualizadoSucesso =true;
      this.disabled= true;
      this.botaoSalvar= false;
    })
  }
}
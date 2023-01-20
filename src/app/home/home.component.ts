import { Component } from '@angular/core';
import { Artists } from '../models/artists';
import { MusicservicesService } from '../services/musicservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private discoService:MusicservicesService){}

  // discoListado = new Array();
  discoListado= new Array();
  searchQuery:string='';
  datos = new Array();
  verdaderosDatos = new Array();
  allOk = false;
  homeGetDisco(){
    this.discoService.getDisco(this.searchQuery).subscribe({
      next: (disco:Artists[])=> {
        this.discoListado=disco; //el userAll dentro del () puede tener cualquier nombre, solo importa que sea de tipo Users[]

        // console.log(this.discoListado, Object.keys( this.discoListado), Object.values( this.discoListado), Object.entries(this.discoListado))
        this.datos = Object.values(this.discoListado);

        this.verdaderosDatos = this.datos[0]; //array encontrado
        console.log(this.verdaderosDatos)

        this.allOk=true;

      },
      error:(error)=>console.error(error),
      complete:()=> console.info('artists discography has been found!')
    })
  }
}



        // intente json parse stringify
                // return [...this.discoListado] ///????????
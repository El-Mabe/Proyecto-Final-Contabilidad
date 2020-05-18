import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.scss']
})
export class PartesComponent implements OnInit {

  @ViewChild('dialog', {static: true}) dialog: ElementRef;

  data = [
    {
      nombre:'Lapiz',
      cantidad:2,
      valor:280109
    },
    {
      nombre:'Material 2',
      cantidad:3,
      valor:'160820'
    },
    {
      nombre:'Mat 3',
      cantidad:9,
      valor:'080108'
    },
    {
      nombre:'Mat 4',
      cantidad:5,
      valor:'080108'
    },
  ];

  settings = {
    actions: {
      add:false,
    },
    edit: {
      editButtonContent: '<i class="nb-search"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      nombre: {
        title: 'Nombre',
        type: 'string',
      },
      valor : {
        title: 'Precio unitario',
        type: 'number',
      },
      cantidad : {
        title: 'Cantidad',
        type: 'number',
      }
    },
    mode: 'external'
  };


  detalle:any = "";
  source: LocalDataSource;;
  constructor(private router:Router,
              private activeRoute:ActivatedRoute,
              private dialogService:NbDialogService) { 
    this.source = new LocalDataSource(this.data);
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.detalle = params.partes;
      if(this.detalle === 'mano de obra'){
        console.log('into yes');
        
        this.settings.columns = {
          nombre: {
            title: 'Nombre',
            type: 'string',
          },
          horas: {
            title: 'Horas',
            type: 'number',
          },
          valorHora:{
            title: 'Cantidad',
            type: 'number',
          }
      }
    }
      else{
        this.settings.columns = {
          nombre: {
            title: 'Nombre',
            type: 'string',
          },
          valor : {
            title: 'Precio unitario',
            type: 'number',
          },
          cantidad : {
            title: 'Cantidad',
            type: 'number',
          }
      }
      }
    })
  }

  ngOnInit() {
    
  }

  crear(){
    this.openDialog(this.dialog);
  }

  openDialog(dialog) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }

}

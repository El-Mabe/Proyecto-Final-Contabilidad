import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-detalle-departamentos',
  templateUrl: './detalle-departamentos.component.html',
  styleUrls: ['./detalle-departamentos.component.scss']
})
export class DetalleDepartamentosComponent implements OnInit {

  @ViewChild('dialog', {static: true}) dialog: ElementRef;

  data = [
    {
      nombre:'Materiales',
      valor:'280109'
    },
    {
      nombre:'Mano de obra',
      valor:'160820'
    },
    {
      nombre:'Costos indirectos',
      valor:'080108'
    },
    {
      nombre:'Inventario inicial',
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
        title: 'Valor',
        type: 'number',
      }
    },
    mode: 'external'
  };


  detalle:any = "";
  source: LocalDataSource;
  constructor(private router:Router,
              private activeRoute:ActivatedRoute,
              private dialogService:NbDialogService) { 
    this.source = new LocalDataSource(this.data);
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.detalle = params.detalle;
    })
  }

  ngOnInit() {
  }

  navigate(event){
    console.log(event.data.nombre);
    this.router.navigateByUrl(`dashboard/${this.detalle.toLowerCase()}/${event.data.nombre.toLowerCase()}`);
  }

  crear(){
    this.openDialog(this.dialog);
  }

  openDialog(dialog) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }


}

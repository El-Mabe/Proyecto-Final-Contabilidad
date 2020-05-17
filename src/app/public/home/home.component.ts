import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('dialog', {static: true}) dialog: ElementRef;

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
      fecha: {
        title: 'Fecha de creacion',
        type: 'string',
      },
    },
    mode: 'external'
  };

  data = [
    {
      nombre:'Camisas',
      fecha:'28-01-09'
    },
    {
      nombre:'Pantalon',
      fecha:'16-08-20'
    },
    {
      nombre:'Chaqueta',
      fecha:'08-01-08'
    },
  ]

  source: LocalDataSource = new LocalDataSource();
  constructor(private router:Router,
    private dialogService:NbDialogService) { 
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {
  }

  navigate(event){
    console.log(event.data.nombre);
    this.router.navigateByUrl(`dashboard/departamentos/${event.data.nombre.toLowerCase()}`);
  }

  crear(){
    this.openDialog(this.dialog);
  }

  openDialog(dialog) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }
}

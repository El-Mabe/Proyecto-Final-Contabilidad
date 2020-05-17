import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {

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
    },
    mode: 'external'
  };

  data = [
    {
      nombre:'Diseño',
    },
    {
      nombre:'Corte',
    },
    {
      nombre:'Costura',
    },
  ];

  lot:any = "";

  source: LocalDataSource = new LocalDataSource();
  constructor(private router:Router,
              private activeRoute:ActivatedRoute,
              private dialogService:NbDialogService) { 
    this.source = new LocalDataSource(this.data);
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      
      this.lot = params.nombre;
    })
  }

  ngOnInit() {
  }

  navigate(event){
    console.log(event.data.nombre);
    this.router.navigateByUrl(`dashboard/${event.data.nombre.toLowerCase()}`);
  }
  crear(){
    this.openDialog(this.dialog);
  }

  openDialog(dialog) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }

}


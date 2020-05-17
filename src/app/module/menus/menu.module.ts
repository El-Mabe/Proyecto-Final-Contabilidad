import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbMenuItem} from '@nebular/theme';

export const Menu: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'nb-home',
    home: true,
    link: 'home'
  },
  {
    title: 'Configuraciones',
    expanded: true,
    icon: 'nb-gear',
    children: [
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MenuModule {
}

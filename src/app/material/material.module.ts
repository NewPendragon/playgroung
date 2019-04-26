import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MatButtonModule,
          MatCheckboxModule,
          MatToolbarModule,
          MatIconModule,
          MatSidenavModule,
          MatListModule,
          MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule { }

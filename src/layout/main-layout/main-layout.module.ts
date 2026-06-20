import { NgModule } from '@angular/core';
import { MainLayout } from './main-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainLayout],
  imports: [CommonModule, RouterModule],
  exports: [MainLayout],
})
export class MainLayoutModule {}

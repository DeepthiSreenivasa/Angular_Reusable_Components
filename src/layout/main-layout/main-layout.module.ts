import { NgModule } from '@angular/core';
import { MainLayout } from './main-layout';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainLayout],
  imports: [CommonModule],
  exports: [MainLayout],
})
export class MainLayoutModule {}

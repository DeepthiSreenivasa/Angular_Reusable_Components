import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HeaderModule } from '../layout/header/header.module';
import { MainLayoutModule } from '../layout/main-layout/main-layout.module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, HeaderModule, MainLayoutModule],
  bootstrap: [App],
})
export class AppModule {}

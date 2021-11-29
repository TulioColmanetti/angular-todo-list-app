import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { SimpleHighlightDirective } from './simple-highlight.directive';

@NgModule({
  declarations: [HeaderComponent, SimpleHighlightDirective],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  exports: [HeaderComponent, AppRoutingModule, SimpleHighlightDirective],
})
export class SharedModule {}

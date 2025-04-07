import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportComponent } from './export.component';
import { RouterModule } from '@angular/router';
import { EXPORT_ROUTES } from './export.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EXPORT_ROUTES)
  ],
  declarations: [
    ExportComponent
  ],
  exports: [ExportComponent]
})
export class ExportModule { }

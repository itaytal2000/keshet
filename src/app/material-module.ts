import {NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  exports: [    
    MatSelectModule,
    MatSnackBarModule
  ]
})

export class DemoMaterialModule {}
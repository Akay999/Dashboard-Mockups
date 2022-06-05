import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';

const MaterialsComp = [
  MatButtonModule,
  MatTooltipModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatIconModule,
  MatExpansionModule,
  MatCardModule,
  MatTableModule,
  MatMenuModule
];

@NgModule({
  imports: [MaterialsComp],
  exports : [MaterialsComp]
})
export class MaterialsModule { }

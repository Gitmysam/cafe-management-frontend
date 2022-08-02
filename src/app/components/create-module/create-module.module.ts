import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCreateComponent } from './product-create/product-create.component';

@NgModule({
  declarations: [ProductCreateComponent],
  exports: [ProductCreateComponent],
  imports: [CommonModule, FormsModule],
})
export class CreateModuleModule {}

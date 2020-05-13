import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';


const MaterialModules = [ScrollingModule];

@NgModule({
  declarations: [],
  imports: [MaterialModules],
  exports:[MaterialModules]

})
export class MaterialModule { }

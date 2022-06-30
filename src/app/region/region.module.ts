import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRegionComponent } from './add-region/add-region.component';
import { ListRegionComponent } from './list-region/list-region.component';
import { RegionRoutingModule } from './region-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegionService } from 'src/services/region.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';



@NgModule({
  declarations: [
    AddRegionComponent,
    ListRegionComponent,
    EditRegionComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }]
})
export class RegionModule { }

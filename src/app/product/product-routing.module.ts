import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { ListProducComponent } from "./list-produc/list-produc.component";

const routes: Routes=[
    {path: 'add', component: AddProductComponent},
    {path:'list', component: ListProducComponent}
]
@NgModule(
    {imports: [RouterModule.forChild(routes)]}
)

export class ProductRoutingModule{}
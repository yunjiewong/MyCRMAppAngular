import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AuthGuardGuard } from "src/guard/auth-guard.guard";
import { AddRegionComponent } from "./add-region/add-region.component";
import { EditRegionComponent } from "./edit-region/edit-region.component";
import { ListRegionComponent } from "./list-region/list-region.component";

const routes:Routes=[
    {path:'list', component:ListRegionComponent,canActivate:[AuthGuardGuard] },
    {path:'edit/:id',component: EditRegionComponent,canActivate:[AuthGuardGuard]},
    {path:'add', component:AddRegionComponent,canActivate:[AuthGuardGuard] }
]

@NgModule(
    {
        imports:[RouterModule.forChild(routes)]
    }
)
export class RegionRoutingModule{

}
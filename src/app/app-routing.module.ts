import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { EventListComponent } from "./event-list/event-list.component";

const routes:Routes = [
  {path:'', component: UserListComponent},
  {path:'edit/:userId', component: AddUserComponent},
  {path:'create', component: AddUserComponent},
  {path:'events', component: EventListComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
    { path: '\dashboard', component: ViewComponent },
    { path: '\add-user', component: AddUserComponent },
    { path: '\add-post', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}

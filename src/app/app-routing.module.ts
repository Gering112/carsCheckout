// this routing component contains the routing module for our application
import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { loginComponent } from './login/login.component'
import { registerComponent } from './registeration/register.component';

//configure routes for our app
const routes : Routes = [
    {path: 'login', component: loginComponent},
    {path: 'register',component: registerComponent}
]; 

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule] 
})

export class AppRoutingModule{}
export const routingComponents = [loginComponent,registerComponent]
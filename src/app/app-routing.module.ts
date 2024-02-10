import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PotfolioComponent } from './potfolio/potfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:" " ,redirectTo:'home', pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:"portfolio" , component:PotfolioComponent,children:[
    {path:"" ,redirectTo:'product', pathMatch:"full"},
    {path:"product" ,component:ProductComponent},
    {path:"portfolio" ,component:PotfolioComponent},
    {path:"details" , component:DetailsComponent}
  ]},
  {path:"contact" ,component:ContactComponent},
  {path:"**" , component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

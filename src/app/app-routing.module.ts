import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { ColorEditComponent } from './components/color-edit/color-edit.component';
import { ColorComponent } from './components/color/color.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
  },
  {
    path: 'home', component: ColorComponent
  },
  {
    path: 'Brand', component: BrandComponent
  },{
    path: 'Brand/Add', component: BrandAddComponent
  },
  {
    path: 'Color/Add', component: ColorAddComponent
  },
  {
     path: 'Color/Edit/:id', component: ColorEditComponent
  },
  {
      path: 'Brand/Edit/:id', component: BrandEditComponent
  },
  {
     path: 'Color/Delete/:id', component: ColorDeleteComponent
  },
  {
     path: 'Brand/Delete/:id', component: BrandDeleteComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

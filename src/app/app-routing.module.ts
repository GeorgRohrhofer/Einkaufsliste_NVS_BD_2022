import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { FormularComponent } from './formular/formular.component';
const routes: Routes = [
 { path: '', component: ListeComponent },
 { path: 'formular', component: FormularComponent }
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }

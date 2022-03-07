import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeComponent } from './liste/liste.component';
import { FormularComponent } from './formular/formular.component';
import { HttpClientModule} from "@angular/common/http";


@NgModule({
 declarations: [AppComponent, HeaderComponent, ListeComponent,
 FormularComponent],
 imports: [
 BrowserModule,
 AppRoutingModule,
 FormsModule,
 HttpClientModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
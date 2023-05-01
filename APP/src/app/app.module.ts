import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { UsuariosListarComponent } from './page/usuarios/usuarios-listar/usuarios-listar.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms'
import{MatInputModule} from '@angular/material/input'
import{MatSelectModule} from '@angular/material/select'
import{MatDatepickerModule} from '@angular/material/datepicker'
import { MatButtonModule } from '@angular/material/button';
import { UsuariosCreaditaComponent } from './page/usuarios/usuarios-creadita/usuarios-creadita.component';
import { ToolbarComponent } from './page/toolbar/toolbar.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from'@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { UsuariosElimiarComponent } from './page/usuarios/usuarios-listar/usuarios-elimiar/usuarios-elimiar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './page/footer/footer.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
   UsuariosListarComponent,
   UsuariosCreaditaComponent,
   ToolbarComponent,
   UsuariosElimiarComponent,
   FooterComponent,

  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatPaginatorModule
   


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

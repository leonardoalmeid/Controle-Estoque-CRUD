import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { ProdutoService } from './app-service/produto.service';
import { EstoqueService } from './app-service/estoque.service';
import { CadastrarProdutoComponent } from './pages/produto/cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './pages/produto/editar-produto/editar-produto.component';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ModalSucessoComponent } from './modal/modal-sucesso/modal-sucesso.component';
import { ModalErroComponent } from './modal/modal-erro/modal-erro.component';
import { ModalAlertComponent } from './modal/modal-alert/modal-alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    InicioComponent,
    ProdutoComponent,
    EstoqueComponent,
    CadastrarProdutoComponent,
    EditarProdutoComponent,
    PaginaNaoEncontradaComponent,
    ModalSucessoComponent,
    ModalErroComponent,
    ModalAlertComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: InicioComponent, pathMatch: 'full' },
      { path: 'produto', component: ProdutoComponent },
      { path: 'cadastrar-produto', component: CadastrarProdutoComponent },
      { path: 'editar-produto/:id', component: EditarProdutoComponent },
      { path: 'estoque', component: EstoqueComponent },
      { path: '404', component: PaginaNaoEncontradaComponent },
      {path: '**', redirectTo: '/404'}
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    ProdutoService,
    EstoqueService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

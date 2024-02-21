import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HighlightDirective } from './directive/highlight.directive';
import { ReplaceTextDirective } from './directive/replace-text.directive';
import { TodoComponent } from './standalone/todo/todo.component';
import { CoreMenuComponent } from './standalone/todo/components/core-menu/core-menu.component';
import { TodoElementComponent } from './standalone/todo/components/todo-element/todo-element.component';

@NgModule({
            declarations: [
              AppComponent,
              LoginComponent,
              NotFoundComponent,
              MainComponent,
              HighlightDirective,
              ReplaceTextDirective,
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              NgbModule,
              RouterModule,
              ReactiveFormsModule,
              HttpClientModule,
              TodoComponent
            ],
            providers: [
              provideClientHydration(),
            ],
            bootstrap: [AppComponent],
          })
export class AppModule {
}

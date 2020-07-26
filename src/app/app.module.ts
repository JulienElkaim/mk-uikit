import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MkComponentsComponent } from './mk-components/mk-components.component';
import { MkDndComponent } from './mk-components/mk-dnd/mk-dnd.component';
import { DndDirective } from './mk-components/mk-dnd/directive/dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    MkComponentsComponent,
    MkDndComponent,
    DndDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TrimPipe } from './trim.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    TrimPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TrimPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

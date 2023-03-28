import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadfootModule } from './modules/headfoot/headfoot.module';
import { MaterialModule } from './modules/material-ui/material-ui.module';
import { JsonListComponent } from './json-list/json-list.component';
import { JsonButtonsComponent } from './json-buttons/json-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonListComponent,
    JsonButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HeadfootModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { BandsService } from './bands.service';
import { EditMemberComponent } from './edit-member/edit-member.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    TableComponent,
    EditMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

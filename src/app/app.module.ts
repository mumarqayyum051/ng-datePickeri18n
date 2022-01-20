import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbdDatepickerI18n } from './date-picker/date-picker.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule],
  declarations: [AppComponent, NgbdDatepickerI18n],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

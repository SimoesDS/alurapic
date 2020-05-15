import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoFormComponent } from './photo/photo-form/photo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoFormComponent
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

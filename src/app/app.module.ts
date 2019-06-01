//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//components
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

import { MatTabsModule } from '@angular/material/tabs';
import { LocationPageComponent } from './Components/location-page/location-page.component';
import { HomeFiltrationContainerComponent } from './Components/home-filtration-container/home-filtration-container.component';
import { FiltrationComponent } from './Components/filtration/filtration.component';
import { HomeComponent } from './Components/home/home.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';


//services 
import { AuthLoginService } from './services/auth-login.service';
import { PlaceDetailsComponent } from './Components/place-details/place-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LocationPageComponent,
    HomeFiltrationContainerComponent,
    FiltrationComponent,
    HomeComponent,
    PlaceDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'location', component: LocationPageComponent },
      { path: 'hf', component: HomeFiltrationContainerComponent },
      { path: 'pd', component: PlaceDetailsComponent }
    ]),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule

  ],
  providers: [AuthLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

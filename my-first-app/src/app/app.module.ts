import { NgModule } from '@angular/core'; // core funkcionalnost za oznacit da je klasa modul
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component'; // typescript zna di je komponenta sad
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms';
import { FinalAssignmentComponent } from './final-assignment/final-assignment.component';

// anotacija koja opisuje klasu koja je modul (ova klasa je root modul)
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    FinalAssignmentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

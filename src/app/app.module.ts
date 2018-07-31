import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule , MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MatDialogModule , MatCardModule , MatTooltipModule } from '@angular/material';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DialogDemoComponent,
    MyDialogComponent,
    TooltipDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule
  ],
  entryComponents: [MyDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

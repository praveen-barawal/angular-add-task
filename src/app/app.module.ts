import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { AddTaskDemoComponent } from "./add-task-demo/add-task-demo.component";
import { AngularMaterialModule } from "./angular-material/angular-material";
import { MatNativeDateModule } from "@angular/material";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AddTaskComponent,
    AddTaskDemoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

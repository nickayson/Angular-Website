import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { TestpageModule} from './CustomerPage/testpage.module';
import { TestpageService} from './CustomerPage/testpage.service';
import { DeviceService} from './DevicesPage/Device.service';
import { DeviceModule} from './DevicesPage/Device.module';
import { GetDevicesService } from './GetDevices/GetDevices.service';
import { GetDevicesModule } from './GetDevices/GetDevices.module';
import { CreatedbService } from './CreateDB/createdb.service';
import { CreatedbModule } from './CreateDB/createdb.module';
import { CustomerListService } from './CustomerList/customerlist.service';
import { CustomerListModule } from './CustomerList/customerlist.module';
import { DeviceStateService } from './DevicesStatePage/DeviceState.service';
import { DeviceStateModule} from './DevicesStatePage/DeviceState.module';
import {Http, HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    TestpageModule,
      DeviceModule,
      GetDevicesModule,
      CreatedbModule,
      CustomerListModule,
      DeviceStateModule,
    HttpModule,

    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  // Declare TestpageService as a provider.
  providers: [TestpageService, DeviceService, GetDevicesService, CreatedbService, CustomerListService, DeviceStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { TestpageComponent } from './CustomerPage/testpage.component';
import { DeviceComponent } from './DevicesPage/Device.component';
import { GetDevicesComponent } from './GetDevices/GetDevices.component';
import { CreatedbComponent } from './CreateDB/createdb.component';
import { CustomerListComponent } from './CustomerList/customerlist.component';
import { DeviceStateComponent} from './DevicesStatePage/DeviceState.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'createdb',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    },
    // Add route to the test page, associated with the TestpageComponent
    {
        path: 'testpage',
        component: TestpageComponent
        /*add your code here*/
    },

    {
        path: 'device',
        component: DeviceComponent
    },

    {
        path: 'getdevice',
        component: GetDevicesComponent
    },


    {
        path: 'createdb',
        component: CreatedbComponent
    },

    {
        path: 'customerlist',
        component: CustomerListComponent
    },

    {
        path: 'devicestate',
        component: DeviceStateComponent
    }
];

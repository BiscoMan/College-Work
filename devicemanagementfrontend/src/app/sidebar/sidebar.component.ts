import { Component, OnInit } from '@angular/core';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // Add route info for the CustomerPage (suggestion: Use the ti-server icon).
    /*add your code here*/
    { path: 'createdb', title: 'Create Database', icon: 'ti-server', class: ''},
    { path: 'customerlist', title: 'Customer History ', icon: 'ti-view-list-alt', class: ''},
    { path: 'devicelist', title: 'Device History ', icon: 'ti-view-list-alt', class: ''},
    { path: 'testpage', title: 'Insert Customer', icon: 'ti-user', class: '' },
    { path: 'device', title: 'Insert Device', icon: 'ti-pencil-alt2', class: ''},
    { path: 'devicestate', title: 'Operate Device ', icon: 'ti-pencil-alt2', class: ''},
    { path: 'getdevice', title: 'My Devices', icon: 'ti-view-list-alt', class: ' '},
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu() {
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}

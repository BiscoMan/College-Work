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
    { path: 'testpage', title: 'Insert Customer',  icon: 'ti-server', class: '' },
    { path: 'device', title: 'Insert Device', icon: 'ti-server', class: ''},
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile',  icon: 'ti-user', class: '' },
    { path: 'table', title: 'Table List',  icon: 'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Typography',  icon: 'ti-text', class: '' },
    { path: 'icons', title: 'Icons',  icon: 'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps',  icon: 'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications',  icon: 'ti-bell', class: '' },
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
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}

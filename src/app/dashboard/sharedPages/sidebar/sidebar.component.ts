import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon: 'fa-tachometer',       class: 'active-pro' },
    { path: '/notifications', title: 'Notifications',     icon: 'fa-bell',      class: '' },
    { path: '/products',      title: 'Products',      icon: 'fa-cart-arrow-down',    class: '' },
    { path: '/users',         title: 'Users List',        icon: 'fa-users',     class: '' },
    { path: '/categories',    title: 'Categories',    icon: 'fa-bars',      class: '' },
    { path: '/subCategories', title: 'SubCategories', icon: 'fa-list',      class: '' },
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
}

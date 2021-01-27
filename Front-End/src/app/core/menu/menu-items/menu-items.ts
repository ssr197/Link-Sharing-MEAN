import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'home',
    name: 'HOME',
    type: 'link',
    icon: 'md md-view-dashboard'
  },
  {
    state: 'credit-card-details',
    name: 'Card',
    type: 'link',
    icon: 'fa fa-credit-card'
  },

];

const logOutItem = [];



@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  getAllLogout(): Menu[] {
    return logOutItem;
  }
}

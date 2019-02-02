import {Routes} from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'members', component: MemberListComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'lists', component: ListsComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
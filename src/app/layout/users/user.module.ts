import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {LoaderModule, PageHeaderModule,PaginationModule,AlertMsgModule } from '../../shared';


import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home.component';
import { UserListComponent } from './user-list.component';
import { UserEditComponent } from './user-edit.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule,AlertMsgModule,LoaderModule, UserRoutingModule,PageHeaderModule,PaginationModule],
    declarations: [UserHomeComponent, UserListComponent, UserEditComponent]
})
export class UserModule {}

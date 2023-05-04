import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from "../../models";

@Component({
    templateUrl: './user-list.component.html',
    styleUrls: ['./user.scss']
})
export class UserListComponent implements OnInit {
    public pageSize: number = 30;
    public totalSize: number;
    public page: number;
    public userAllData: Array<User> = [];
    public paginateData: Array<User> = [];

    constructor(public userService: UserService) {}

    ngOnInit(): void {
        this.userService.getAllUsers();
        this.getUserList();
    }

    getUserList() {
        this.userService.user.subscribe((data) => {
            this.userAllData = data;
            this.totalSize = data.length;
            this.pageTrigger(1);
        console.log(this.userAllData);

        });

    }
    pageTrigger($event:number) {
        this.page = $event;
        this.paginateData = this.userAllData.slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
        );
    }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models';

const baseUrl = `${environment.apiUrl}/9c2d8b12-1c61-4ebe-89a6-6bef831128f6`;

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userList = new BehaviorSubject<User[]>([]);
    user = this.userList.asObservable();

    constructor(private http: HttpClient) {}

    getAllUsers() {
        this.http.get(baseUrl).subscribe(
            (data: User[]) => {
                this.userList.next(data);
            },
            (error) => console.log('Error in Loading data.')
        );
    }

    updateUser(editdata: User) {
        var userList: User[];
        this.user.subscribe((data: User[]) => {
            userList = data;
            userList.forEach((item: User, i: number) => {
                if (editdata.id == item.id) {
                    userList[i] = editdata;
                }
            });
        });
        this.userList.next(userList);
    }
}

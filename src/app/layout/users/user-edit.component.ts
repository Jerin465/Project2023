import { User } from './../../models';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { AlertMsgService } from '../../shared/services';

@Component({
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
    editData: any;
    form: FormGroup;
    loading: boolean = false;
    submitted: boolean = false;
    linkName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private alertService: AlertMsgService
    ) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            depoName: ['', Validators.required],
            mobileNumber: ['', Validators.required]
        });
        this.userService.getAllUsers();
        this.fetchUser();
    }

    get f() {
        return this.form.controls;
    }

    fetchUser() {
        const id: number = this.route.snapshot.params['id'];
        this.userService.user.subscribe((data: User[]) => {
            this.editData = data.find((item) => item.id == id);
            this.form.patchValue(this.editData);
            this.linkName = this.editData ? "Edit" : "Add";
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.form.invalid) {
            this.alertService.error('Please enter valid data', { autoClose: true });
            return;
        }

        this.loading = true;
        this.editData?this.updateUser():this.addUser();

    }
    addUser() {
        const data = this.form.value;
        setTimeout(() => {
            this.userService.updateUser(data);
            this.loading = false;
            this.alertService.success('Updated Succesfully', { autoClose: true });
        }, 1000);
        setTimeout(() => {
            this.router.navigate(['/users']);
        }, 2000);
    }
    updateUser() {
        setTimeout(() => {
            const data = Object.assign(this.editData, this.form.value);
            this.userService.updateUser(data);
            this.loading = false;
            this.alertService.success('Updated Succesfully', { autoClose: true });
        }, 1000);
        setTimeout(() => {
            this.router.navigate(['/users']);
        }, 2000);
    }
}

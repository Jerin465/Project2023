import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertMsgService } from '../../shared/services';
import { User } from '../../models';
import { AuthService } from './../../shared/guard/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: [routerTransition()]
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertMsgService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            deponame: ['', Validators.required],
            mobileNumber: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    ngAfterViewInit(): void {
    }

    get f() {
        return this.form.controls;
    }

    onSubmit() {
        this.alertService.clear();
        // this.loading = true;
        // this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.value);
        const data: User = this.form.value;
        console.log(data);

    }
}

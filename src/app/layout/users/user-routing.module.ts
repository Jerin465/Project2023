import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from './user-home.component';
import { UserListComponent } from './user-list.component';
import { UserEditComponent } from './user-edit.component';

const routes: Routes = [
    {
        path: '',
        component: UserHomeComponent,
        children: [
            { path: '', component: UserListComponent },
            { path: 'update/:id', component: UserEditComponent },
            { path: 'update', component: UserEditComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}

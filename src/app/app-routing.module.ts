import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [{
    	path: 'students',
    	component: StudentsComponent
    }, {
    	path: 'teachers',
    	component: TeachersComponent
    }, {
      path: '',
      pathMatch: 'full',
      component: HomeComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

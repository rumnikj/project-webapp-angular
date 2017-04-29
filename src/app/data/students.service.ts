import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable()
export class StudentsService {

  constructor(
  	private api: ApiService
  ) {}

  getStudents() {
  	return this.api.get('/students');
  }

}

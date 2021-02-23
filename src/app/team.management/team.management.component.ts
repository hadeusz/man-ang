import { Component } from '@angular/core';
import { DataService } from '../data/data.service';

import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { Post } from '../entities/post';

@Component({
  selector: 'app-team.management',
  templateUrl: './team.management.component.html',
  styleUrls: ['./team.management.component.scss']
})
export class TeamManagementComponent {
  constructor(private dataService: DataService) {
  }

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
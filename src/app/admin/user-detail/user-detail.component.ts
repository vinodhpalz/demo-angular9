import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user-list/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  pageTitle: string = 'User Detail';
  user: IUser;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.user = {
      userId: id,
      userName: 'Google',
      userCode: 'ABB-100',
      DOJ: new Date('2019, 3, 20'),
      role: 'Admin User',
      mobile: 9111122223,
      salary: 38000.249,
      rating: 4.2,
      imageUrl: 'assets/images/andrew.jpg',
    };
  }
  onBack() {
    this.router.navigate(['/user-list']);
  }
}

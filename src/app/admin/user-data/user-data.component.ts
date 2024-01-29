import { Component } from '@angular/core';;
import { User } from 'src/app/model/register';
import { Userdata } from 'src/app/model/userdata';

import { UserdetailsService } from 'src/app/service/userdetails/userdetails.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],

})
export class UserDataComponent {
  userdatatable: Userdata = new Userdata();
  users: any[] = [];
  res: any = {};
  data: User = new User();
  popup: User = new User();
  displayStyle = 'none';
  sortBy = 'register_no';
  sortDirection = 'asc';
  searchText: string = '';
  originalUsers: any[] = [];
 

  constructor(private userdetailsService: UserdetailsService) {}

  ngOnInit() {
    this.userdatatable.action = 'user_list';
    console.log('testtest', this.userdatatable);
    this.userdetailsService
      .userdata(this.userdatatable)
      .subscribe((response) => {
        if (response && response.user_list && Array.isArray(response.user_list[0])) {
          this.users = response.user_list[0];
        } else {
          console.error('Invalid API response format');
        }
      });

    // this.detailuserdata();
  }

  Byid(id: any) {
    this.userdatatable.action = 'user_profile_data';
    this.userdatatable.user_id = id;
    this.userdetailsService.byid(this.userdatatable).subscribe((response) => {
      this.popup = response.user_profile_data[0];
    });
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
  sortByColumn(column: string) {
    if (this.sortBy === column) {
      // If same column is clicked, toggle direction
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // If different column is clicked, reset direction to ascending
      this.sortBy = column;
      this.sortDirection = 'asc';
    }
    this.sortUsers(); // Call the sorting function
  }

  applyFilter() {
    if (this.searchText.trim() === '') {
      // If search text is empty, show all users
      this.ngOnInit();
    } else {
      // Filter users based on search text
      this.users = this.users.filter(user =>
        user.first_name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        user.user_role_name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  sortUsers() {
    this.users.sort((a, b) => {
      const aValue = a[this.sortBy];
      const bValue = b[this.sortBy];
      if (this.sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }

  sortIcon(column: string): string {
    if (this.sortBy === column) {
      return this.sortDirection === 'asc' ? 'fa-caret-up' : 'fa-caret-down';
    }
    return '';
  }
}

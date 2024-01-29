import { Component } from '@angular/core';
import { UserdetailsService } from '../service/userdetails/userdetails.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  constructor(
    private userdetailsService: UserdetailsService
  ){}

  ngOninIt(){}

}

import { Component, OnInit } from '@angular/core';
import { RegUser } from '../../shared/reg-user.model';
import { RegUserService } from '../../shared/reg-user.service';

@Component({
  selector: 'app-regtest',
  templateUrl: './regtest.component.html',
  styleUrls: ['./regtest.component.css']
})
export class RegtestComponent implements OnInit {

  constructor(private _reguserService: RegUserService) { }

  ngOnInit() {

  }
}

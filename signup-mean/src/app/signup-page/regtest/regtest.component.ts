import { Component, OnInit } from '@angular/core';
import { RegUser } from '../../shared/reg-user.model';
import { RegUserService } from '../../shared/reg-user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regtest',
  templateUrl: './regtest.component.html',
  styleUrls: ['./regtest.component.css']
})
export class RegtestComponent implements OnInit {

  constructor(private _reguserService: RegUserService,
              private router: Router,
              private actRoute: ActivatedRoute) { }

  ngOnInit() {

  }

  onEdit(reguser: RegUser) {
    this.router.navigate(["/editreguser/"+ reguser._id]);
  }
}

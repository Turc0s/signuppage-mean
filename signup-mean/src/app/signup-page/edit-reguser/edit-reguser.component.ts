import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RegUserService } from '../../shared/reg-user.service';
import { RegUser } from '../../shared/reg-user.model';

@Component({
  selector: 'app-edit-reguser',
  templateUrl: './edit-reguser.component.html',
  styleUrls: ['./edit-reguser.component.css']
})
export class EditReguserComponent implements OnInit {

  constructor(private router: Router, private actRoute: ActivatedRoute,
    private _reguserService: RegUserService) { }

  ngOnInit() {
    this.getRegUserEditDetails(this.actRoute.snapshot.params["id"]);
  }

  getRegUserEditDetails(id) {
    this._reguserService.getSingleRegUser(id)
      .subscribe((data: RegUser) => {
        this._reguserService.reguserObj = data;
      });
  }

  updateRegUser(id) {
    this._reguserService.updateEditRegUser(id)
      .subscribe(reguser => {
        this.router.navigate(["/signup"]);
      }, (err) => {
        console.log(err);
      });
  }

}

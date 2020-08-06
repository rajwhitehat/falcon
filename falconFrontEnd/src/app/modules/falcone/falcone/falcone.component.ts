import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../core/http/api.service";
@Component({
  selector: 'app-falcone',
  templateUrl: './falcone.component.html',
  styleUrls: ['./falcone.component.scss']
})
export class FalconeComponent implements OnInit {

  constructor(private falconAPIService: ApiService) { }

  ngOnInit() {
    this.falconAPIService.setSearchresult(null);
  }

}

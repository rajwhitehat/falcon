import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../core/http/api.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
searchResult;
  constructor(private falconService: ApiService) { }


  ngOnInit() {
  this.falconService.searchResult.subscribe((res) => {
this.searchResult = res;
    }, (err) => {

    })
  }

  

}

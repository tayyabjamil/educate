import { Component, OnInit } from '@angular/core';

import * as platformModule from 'tns-core-modules/platform';
import { DataService } from '~/app/data.service';
import { HttpService } from '~/app/shared/http.service';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
  selector: 'ns-biddinglist',
  templateUrl: './biddinglist.component.html',
  styleUrls: ['./biddinglist.component.css'],
  moduleId:module.id
})
export class BiddinglistComponent implements OnInit {
queries;
pageSide;
previewSize;
iconSize;
  constructor(
    private httpService:HttpService,
    private routerExtensions:RouterExtensions,
    ) { }

  ngOnInit() {
    const deviceHeight: number = platformModule.screen.mainScreen.heightDIPs;
    const deviceWidth: number = platformModule.screen.mainScreen.widthDIPs;
    this.pageSide = deviceWidth * 0.10;
    this.previewSize = deviceWidth * 0.20;
    this.iconSize= deviceWidth * 0.095;
    this.getUserQueries();
  }
 
  getUserQueries() {
    this.httpService.getUserQueries()
    .subscribe(res => {
      this.queries = res;
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }

}

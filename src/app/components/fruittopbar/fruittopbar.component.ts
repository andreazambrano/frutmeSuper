import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TixInterface } from '../../models/tix-interface'; 

@Component({
  selector: 'app-fruittopbar',
  templateUrl: './fruittopbar.component.html',
  styleUrls: ['./fruittopbar.component.css']
})
export class FruittopbarComponent implements OnInit {
  info:any={};
  constructor(
 public _uw:UserWService,
 private dataApi: DataApiService,
  public router: Router,
  public location: Location
  	) { }
    public tixToAdd:TixInterface;
   loadAPI = null;  
  //  url = "assets/assetsfruit/js/popper.min.js";
  filter(parametro:string){
    this._uw.showAll=false;
    this._uw.categorySelected=parametro;
  }
  loadInfo(){
    this.dataApi
    .getInfo()
    .subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.info=res;
        this._uw.info=this.info;
        // this._uw.currency=this._uw.info[0].usd;

        }
     });
  }
    loadInfo1(){
   
    this.dataApi
    .getInfo()
    .subscribe((res:any) => {
      if (res[0] === undefined){
       }else{
        this.info=res;
        this._uw.info=this.info;
        this._uw.currency=this._uw.info[0].bs;

        }
     });
  }

 setBs(){
    this.loadInfo();
    this._uw.currency=this._uw.info[0].bs;
  }
   setUsd(){
    this.loadInfo();
    this._uw.currency=this._uw.info[0].usd;
  }

  ngOnInit() {

       if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            // this.loadScript();
            this.loadInfo1();
            // this._uw.currency=this._uw.info[0].bs;
          });
        }
        this._uw.loaded=true;
  	 // if (this._uw.loaded==true){
    //       this.loadAPI = new Promise(resolve => {
    //         // this.loadScript();
    //         this.loadInfo();
    //       });
    //     }
    //     this._uw.loaded=true;
  }
    //   public loadScript() {
    //   let node = document.createElement("script");
    //   node.src = this.url;
    //   node.type = "text/javascript";
    //   node.async = true;
    //   node.charset = "utf-8";
    //   document.getElementsByTagName("head")[0].appendChild(node);
    // }
}

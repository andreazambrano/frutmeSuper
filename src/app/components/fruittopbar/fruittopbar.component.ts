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
  public tixs:TixInterface;
  public tixToAdd:TixInterface;

  loadAPI = null;  
  filter(parametro:string){
    if(this._uw.allLoaded!=true){
        this.getAllTixs();
    }
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
  getAllTixs(){
    this.dataApi
    .getAllTixs()
    .subscribe((res:any) => {
      if (res[0] === undefined){
        return
        }else{

          this.tixs=res[0];

         this._uw.totalTixs = res.length;
        }
      });
  }
  setMethod(method){
    let met = method;
    if(met=="zelle" || met=="paypal" || met=="efectivo"){
      this.setUsd();
    }
      if(met=="pagomovil" || met=="bstransferencia"){
      this.setBs();
    }
  }

 procesar(){
  this._uw.feet=1;
 }
atras(){
  this._uw.feet=0;
}

  ngOnInit() {
       if (this._uw.loaded==true){
          this.loadAPI = new Promise(resolve => {
            this.loadInfo1();
          });
        }
        this._uw.loaded=true;  	
  }
}

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

oncart(index){
   let id=index;
  this.tixs[id].oncart=true;
  // console.log("en el carrito");
   this.cartCalculate();
}

cartCalculate(){
  this._uw.car =[];
  this._uw.numProd=0;
  this._uw.total=0;
  // console.log("tamaño: "+this._uw.totalTixs)
  for (let i = 0; i < this._uw.totalTixs; i++){
    if (this.tixs[i].quantity>0){
      this._uw.car.push(this.tixs[i]);
      this._uw.numProd=this._uw.numProd+1;
      this._uw.total=this._uw.total+(this.tixs[i].quantity*this.tixs[i].globalPrice);
    }
  }
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
      if(met=="paypal"){
        this._uw.comision=this._uw.info[0].paypal;
        this._uw.paypal=true;
        this._uw.zelle=false;
      }
      if(met=="zelle"){
        this._uw.comision=this._uw.info[0].zelle;
        this._uw.zelle=true;
             this._uw.paypal=false;
      }
       if(met=="efectivo"){
        this._uw.comision=0;
        this._uw.zelle=false;
             this._uw.paypal=false;
      }

    }
      if(met=="pagomovil" || met=="bstransferencia"){
      this.setBs();
      this._uw.comision=0;
      this._uw.paypal=false;
       this._uw.zelle=false;
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

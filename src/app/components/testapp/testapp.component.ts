import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { TixInterface } from '../../models/tix-interface';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-testapp',
  templateUrl: './testapp.component.html',
  styleUrls: ['./testapp.component.css']
})
export class TestappComponent implements OnInit {

  constructor(
   public _uw:UserWService,
  private dataApi: DataApiService
     ) { }
     public tixs:TixInterface;
  getAllTixsInitload(){
    this.dataApi
    .getAllTixsInitload()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }
   getAllTixs(){
    this.dataApi
    .getAllTixs()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }

loadmore(){
  this.getAllTixs();
  this._uw.allLoaded=true;
  this._uw.showAll=true;
}
showAll(){
  this._uw.showAll=true;
}
oncart(index){
   let id=index;
  this.tixs[id].oncart=true;
  console.log("en el carrito");
}
outcart(index){
    let id=index;
    this.tixs[id].quantity=0;
   this.tixs[id].oncart=false;
     console.log("fuera del carrito");
}

minus(index){
   let id=index;
   if(this.tixs[id].quantity>0){      
   this.tixs[id].quantity=this.tixs[id].quantity-1;
  }
  if(this.tixs[id].quantity==0){
    this.tixs[id].oncart=false;
    this.outcart(id);
  }
}
plus(index){
  let id=index;
  this.tixs[id].quantity=this.tixs[id].quantity+1;
  this.oncart(id);
}


  ngOnInit() {
     this.getAllTixsInitload();
     this._uw.categorySelected="hortalizas";

  }


}

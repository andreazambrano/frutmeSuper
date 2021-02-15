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
   // loadAPI = null;  
   // url="assets/assetsfruit/js/jquery.parallax-scroll.js";
   // url2 = "assets/assetsfruit/js/scripts.js";
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

  
    // this._uw.tixPreview.quantity=1;
 // if (this._uw.loaded==true){
 //          this.loadAPI = new Promise(resolve => {
 //            this.loadScript();
 //            this.loadScript2();
 //          });
 //        }
 //        this._uw.loaded=true;
  }
    //   public loadScript() {
    //   let node = document.createElement("script");
    //   node.src = this.url;
    //   node.type = "text/javascript";
    //   node.async = true;
    //   node.charset = "utf-8";
    //   document.getElementsByTagName("head")[0].appendChild(node);
    // }
    //     public loadScript2() {
    //   let node = document.createElement("script");
    //   node.src = this.url2;
    //   node.type = "text/javascript";
    //   node.async = true;
    //   node.charset = "utf-8";
    //   document.getElementsByTagName("head")[0].appendChild(node);
    // }

}

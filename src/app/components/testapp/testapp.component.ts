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
  getAllTixs(){
    this.dataApi
    .getAllTixs()
    .subscribe((tixs: TixInterface) => (this.tixs=tixs));
  }

  ngOnInit() {
     this.getAllTixs();
//     this.tixs=
// {
//     "id": "5fdcb5206a1b7205a51f4641",
//     "productName": "Aguacate",
//     "description": "Aguacate",
//     "category": "frutos",
//     "presentacion": "(Kg)",
//     "globalPrice": 1600000,
//     "status": "activated",
//     "images": [
//       "http://3.129.29.75:80/imgFrutme/server/local-storage/tixsImages/312e6c99-11af-41e8-86da-4eddf29bf67e.jpg"
//     ]
//   },
//   {
//     "id": "5fdcb5206a1b7205a51f4641",
//     "productName": "Aguacate",
//     "description": "Aguacate",
//     "category": "frutos",
//     "presentacion": "(Kg)",
//     "globalPrice": 1600000,
//     "status": "activated",
//     "images": [
//       "http://3.129.29.75:80/imgFrutme/server/local-storage/tixsImages/312e6c99-11af-41e8-86da-4eddf29bf67e.jpg"
//     ]
//   },
//   {
//     "id": "5fdcb5206a1b7205a51f4641",
//     "productName": "Aguacate",
//     "description": "Aguacate",
//     "category": "frutos",
//     "presentacion": "(Kg)",
//     "globalPrice": 1600000,
//     "status": "activated",
//     "images": [
//       "http://3.129.29.75:80/imgFrutme/server/local-storage/tixsImages/312e6c99-11af-41e8-86da-4eddf29bf67e.jpg"
//     ]
//   },
//   {
//     "id": "5fdcb5206a1b7205a51f4641",
//     "productName": "Aguacate",
//     "description": "Aguacate",
//     "category": "frutos",
//     "presentacion": "(Kg)",
//     "globalPrice": 1600000,
//     "status": "activated",
//     "images": [
//       "http://3.129.29.75:80/imgFrutme/server/local-storage/tixsImages/312e6c99-11af-41e8-86da-4eddf29bf67e.jpg"
//     ]
//   },
//   {
//     "id": "5fdcb5206a1b7205a51f4641",
//     "productName": "Aguacate",
//     "description": "Aguacate",
//     "category": "frutos",
//     "presentacion": "(Kg)",
//     "globalPrice": 1600000,
//     "status": "activated",
//     "images": [
//       "http://3.129.29.75:80/imgFrutme/server/local-storage/tixsImages/312e6c99-11af-41e8-86da-4eddf29bf67e.jpg"
//     ]
//   },
//   {
//     "id": "5fdcb5206a1b7205a51f4641",
//     "productName": "Aguacate",
//     "description": "Aguacate",
//     "category": "frutos",
//     "presentacion": "(Kg)",
//     "globalPrice": 1600000,
//     "status": "activated",
//     "images": [
//       "http://3.129.29.75:80/imgFrutme/server/local-storage/tixsImages/312e6c99-11af-41e8-86da-4eddf29bf67e.jpg"
//     ]
//   },
//   {
//     "id": "5fdcb5206a1b7205a51f4641",
//     "productName": "Aguacate",
//     "description": "Aguacate",
//     "category": "frutos",
//     "presentacion": "(Kg)",
//     "globalPrice": 1600000,
//     "status": "activated",
//     "images": [
//       "http://3.129.29.75:80/imgFrutme/server/local-storage/tixsImages/312e6c99-11af-41e8-86da-4eddf29bf67e.jpg"
//     ]
//   },
//   {
//     "id": "5fdcb5206a1b7205a51f4641",
//     "productName": "Aguacate",
//     "description": "Aguacate",
//     "category": "frutos",
//     "presentacion": "(Kg)",
//     "globalPrice": 1600000,
//     "status": "activated",
//     "images": [
//       "http://3.129.29.75:80/imgFrutme/server/local-storage/tixsImages/312e6c99-11af-41e8-86da-4eddf29bf67e.jpg"
//     ]
//   },
//   {
//     "id": "5fdcb5206a1b7205a51f4641",
//     "productName": "Aguacate",
//     "description": "Aguacate",
//     "category": "frutos",
//     "presentacion": "(Kg)",
//     "globalPrice": 1600000,
//     "status": "activated",
//     "images": [
//       "http://3.129.29.75:80/imgFrutme/server/local-storage/tixsImages/312e6c99-11af-41e8-86da-4eddf29bf67e.jpg"
//     ]
//   },
//   {
//     "id": "5fdcb5206a1b7205a51f4641",
//     "productName": "Aguacate",
//     "description": "Aguacate",
//     "category": "frutos",
//     "presentacion": "(Kg)",
//     "globalPrice": 1600000,
//     "status": "activated",
//     "images": [
//       "http://3.129.29.75:80/imgFrutme/server/local-storage/tixsImages/312e6c99-11af-41e8-86da-4eddf29bf67e.jpg"
//     ]
//   } 



  
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

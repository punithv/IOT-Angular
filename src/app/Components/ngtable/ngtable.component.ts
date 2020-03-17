import { Component, OnInit } from '@angular/core';
import { Device } from 'src/model/Device';
import { HttpserviceService} from 'src/app/Services/httpservice.service';
import { Router } from '@angular/router';
import { ExportService} from 'src/app/Services/export.service';
@Component({
  selector: 'app-ngtable',
  templateUrl: './ngtable.component.html',
  styleUrls: ['./ngtable.component.css']
})
export class NgtableComponent implements OnInit {
  device:Device[];
  activekey:any[];
  actived:Device;
  stata = "Active";
  statd = "Disconnected"
  stato = "Offline"
  activedevice:any[]=[];
  deactivedevice:any[]=[];
  offlinedevice:any[]=[];
  rowData:any;
  rowDataActive:any;
  rowDataDeactive:any;
  rowDataOffline:any;
  search:string;
  activeSearch = false;

 constructor(private http:HttpserviceService,public router:Router, private exportService:ExportService){}
 columnDefs = [
  {headerName: 'DeviceID', field: 'deviceID',sortable: true, filter: true, checkboxSelection: true },
  {headerName: 'DeviceLocation', field: 'deviceLocation',sortable: true, filter: true },
  {headerName: 'DeviceStatus', field: 'deviceStatus',sortable: true, filter: true }
];

columnDefsa = [
  {headerName: 'DeviceID', field: 'deviceID',sortable: true, filter: true, checkboxSelection: true },
  {headerName: 'DeviceLocation', field: 'deviceLocation',sortable: true, filter: true },
  {headerName: 'DeviceStatus', field: 'deviceStatus',sortable: true, filter: true }
];
columnDefsd = [
  {headerName: 'DeviceID', field: 'deviceID',sortable: true, filter: true, checkboxSelection: true },
  {headerName: 'DeviceLocation', field: 'deviceLocation',sortable: true, filter: true },
  {headerName: 'DeviceStatus', field: 'deviceStatus',sortable: true, filter: true }
];
columnDefso = [
  {headerName: 'DeviceID', field: 'deviceID',sortable: true, filter: true, checkboxSelection: true },
  {headerName: 'DeviceLocation', field: 'deviceLocation',sortable: true, filter: true },
  {headerName: 'DeviceStatus', field: 'deviceStatus',sortable: true, filter: true }
];


  ngOnInit(){ 
    this.http.getdata().subscribe(data=>
      {
        this.handleData(data);
      } 
    );
      

  }
  handleData(data)
  {
    this.device=data;
    console.log(data)
    this.alldevice();
    this.active();
    this.deactive();
    this.offline();

    
  }
  alldevice(){
    this.rowData=this.device;
  }

  active(){
    for(let i=0;i<this.device.length;i++)
    if(this.device[i]['deviceStatus'] == this.stata){
      this.activedevice[i]=this.device[i];
      this.rowDataActive=this.activedevice;
    }
  }
  deactive(){
    for(let i=0;i<this.device.length;i++)
    if(this.device[i]['deviceStatus']== this.statd){
      this.deactivedevice[i]=this.device[i];
      this.rowDataDeactive=this.deactivedevice;
    }
}
offline(){
  for(let i=0;i<this.device.length;i++)
  if(this.device[i]['deviceStatus']== this.stato){
    this.offlinedevice[i]=this.device[i];
    this.rowDataOffline=this.offlinedevice;
  }
}

export(status:String) {
  if (status === "active") {
    this.exportService.exportExcel(this.activedevice ,'Active Device Details');
  } else if (status === "deactive") {
    this.exportService.exportExcel(this.deactivedevice, 'disconnect Device Details');
  }else if (status === "offline") {
    this.exportService.exportExcel(this.offlinedevice, 'Offlinr Device Details');
  }
   else if(status === "all") {
    this.exportService.exportExcel(this.device, 'All Device Details');
  }
}



searchdata(search:any){
  console.log("sucess")
  var temp1 = this.device
  console.log(this.device)
  console.log(temp1)
  var array =[];
  var count= 0;
  this.search = search.target.value;
  console.log("search"+this.search)
  if(this.router.url == '/alldevices'){
    console.log("yes")
    if(this.search != null){
      console.log("not null")
      this.activeSearch = true;
      this.device.forEach(element => {
        if (element.deviceLocation.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ){
          this.rowData=null;
          console.log(element)
         
          array.push(element)
          console.log(array)
          this.rowData=array;
        }
        else {
          count++;
          if (count == this.device.length) {
            this.rowData = null;
          }
        }
      });
    }
    else {
      this.rowData= temp1;
      this.activeSearch = false;
    }
  }

}
cleardata(){
  this.rowData=this.device
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/model/Device';
import { HttpserviceService} from 'src/app/Services/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public status:string=""
  online=0;
  total=0;
  offline=0;
  inactive=0;
  device:Device[];

  constructor(private router:Router,private http:HttpserviceService) { }

  ngOnInit(): void {
    this.http.getdata().subscribe(data=>{
      this.handledata(data);
    
    })
    
  }
  handledata(data){
    this.device = data
    this.counts();
  }
  redirect(stat:string){
    this.router.navigateByUrl('/'+stat);
    this.status=stat;

  }
  counts(){
    for(let i=0;i<this.device.length;i++)
    if (this.device[i]['deviceStatus'] === 'Active') {
      this.online ++;
      this.total ++;
    } else if (this.device[i]['deviceStatus'] === 'Disconnected') {
      this.inactive ++;
      this.total ++;

    } else {
      this.offline ++;
      this.total ++;
    }
  }
    

  }

  


import { Component } from '@angular/core';

@Component({
  selector: 'app-studententry',
  templateUrl: './studententry.component.html',
  styleUrls: ['./studententry.component.css']
})
export class StudententryComponent {

  name=""
  rno=""
  adno=""
  mobno=""
  clg=""
  pname=""
  pnum=""
  uname=""
  pswd=""

  read=()=>{

    let data:any={"name":this.name,"rno":this.rno,"adno":this.adno,"mobno":this.mobno,"clg":this.clg,"pname":this.pname,"pnum":this.pnum,"uname":this.uname,"pswd":this.pswd}
    console.log(data)
  }

}

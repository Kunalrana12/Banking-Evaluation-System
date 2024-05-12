import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initiator-details',
  templateUrl: './initiator-details.component.html',
  styleUrls: ['./initiator-details.component.css']
})
export class InitiatorDetailsComponent implements OnInit {

  constructor(private elementRef: ElementRef, private router:Router) { }

  activetab:any='module1';

  ngOnInit(): void {
  }

  goToNextPage() {
   if(this.activetab=='module1'){
    this.activetab='module2'
   }
   else if(this.activetab=='module2'){
    this.activetab='module3'
   }
   else if(this.activetab=='module3'){
    this.activetab='module4'
   }
   else if(this.activetab=='module4'){
    this.activetab='module5'
   }
  }

  goToPreviousPage() {
    if(this.activetab=='module2'){
      this.activetab='module1'
     }
     else if(this.activetab=='module3'){
      this.activetab='module2'
     }
     else if(this.activetab=='module4'){
      this.activetab='module3'
     }
     else if(this.activetab=='module5'){
      this.activetab='module4'
     }
  }

  
  
 

}

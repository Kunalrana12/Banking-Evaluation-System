import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module4',
  templateUrl: './module4.component.html',
  styleUrls: ['./module4.component.css']
})
export class Module4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jointBorrowers: any[] = [];

  addJointBorrower() {
    this.jointBorrowers.push({ name: '', address: '' });
  }

  deleteJointBorrower(index: number) {
    this.jointBorrowers.splice(index, 1);
}

}

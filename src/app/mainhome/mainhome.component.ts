import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit {

  constructor(private router : Router) { }
  start(){
    this.router.navigate(['quiz']);
  }


  ngOnInit() {
  }

}

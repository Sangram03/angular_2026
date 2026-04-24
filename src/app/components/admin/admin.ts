import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  constructor(){
    console.log('Constructor execute');
    
    // property initalization

  }
  ngOnInit(): void {
    console.log('ngOnInit');

    // api call
    // subscription

  }
}

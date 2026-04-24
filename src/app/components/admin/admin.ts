import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit,AfterViewInit {
  constructor(){
    console.log('Constructor execute');

    // property initalization

  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    console.log('ngOnInit');

    // api call
    // subscription



  }
}



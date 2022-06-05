import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css'],
  animations : [
    trigger('fade', [
      state('*', style({ opacity : 1 })),
      state('void', style({opacity : 0, transform : 'translateX(-50px)'})),
      state('hide', style({ opacity : 0, transform : 'translateX(-50px)'})),
      transition('* <=> void', [
        animate(300)
      ]),
      transition('* <=> hide', [
        animate(100)
      ])
    ])
  ]
})
export class ScreenComponent implements OnInit {
  @ViewChild('DashLogo', {static : true}) DashLogo : ElementRef;
  @ViewChild('EmpLi', {static : true}) EmpLi : ElementRef;
  @ViewChild('RolLi', {static : true}) RolLi : ElementRef;
  @ViewChild('CtraiLi', {static : true}) CtraiLi : ElementRef;
  @ViewChild('AssgnLi', {static : true}) AssgnLi : ElementRef;
  @ViewChild('TktLi', {static : true}) TktLi : ElementRef;
  @ViewChild('THisLi', {static : true}) THisLi : ElementRef;
  @ViewChild('NotiLi', {static : true}) NotiLi : ElementRef;
  @ViewChild('FeedLi', {static : true}) FeedLi : ElementRef;

  constructor() { }

  isShow = true;

  trig(){
    return this.isShow ? '*' : 'hide';
  }

  toggle() {
    this.isShow = !this.isShow;
  }

  ngOnInit(): void {
    gsap.from(this.EmpLi.nativeElement, {
      duration : 0.2,
      x : -10,
      opacity : 0
    })
    gsap.from(this.RolLi.nativeElement, {
      duration : 0.2,
      delay : 0.1,
      opacity : 0,
      x : -10
    })
    gsap.from(this.CtraiLi.nativeElement, {
      duration : 0.2,
      delay : 0.2,
      opacity : 0,
      x : -10
    })
    gsap.from(this.AssgnLi.nativeElement, {
      duration : 0.2,
      delay : 0.3,
      opacity : 0,
      x : -10
    })
    gsap.from(this.TktLi.nativeElement, {
      duration : 0.2,
      delay : 0.4,
      opacity : 0,
      x : -10
    })
    gsap.from(this.THisLi.nativeElement, {
      duration : 0.2,
      delay : 0.5,
      opacity : 0,
      x : -10
    })
    gsap.from(this.NotiLi.nativeElement, {
      duration : 0.2,
      delay : 0.6,
      opacity : 0,
      x : -10
    })
    gsap.from(this.FeedLi.nativeElement, {
      duration : 0.2,
      delay : 0.7,
      opacity : 0,
      x : -10
    })
      
  }

}

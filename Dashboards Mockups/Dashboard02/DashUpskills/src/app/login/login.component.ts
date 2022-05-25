import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('Logo', {static : true}) Logo : ElementRef;
  @ViewChild('SubHead', {static : true}) SubHead : ElementRef;
  @ViewChild('bgImg', {static : true}) bgImg : ElementRef;
  @ViewChild('FbIcon', {static : true}) FbIcon : ElementRef;
  @ViewChild('InstaIcon', {static : true}) InstaIcon : ElementRef;
  @ViewChild('LinkeinIcon', {static : true}) LinkedIn : ElementRef;
  @ViewChild('TwitterIcon', {static : true}) TwitterIcon : ElementRef;

  constructor() { }

  public animate = true;

  reverse() {
    this.animate = !this.animate;
    console.log(this.animate)
  }

  ngOnInit(): void {
    // gsap.from(this.bgImg.nativeElement, {
    //   delay : 0.2,
    //   duration : 0.6,
    //   opacity : 0,
    //   y : -10
    // })

    let t1 = gsap.timeline({defaults : {duration : 0.35, opacity : 0}});
    let t2 = gsap.timeline({defaults : {opacity : 0}})

    t2.from(this.Logo.nativeElement, {stagger : 0.5, duration : 1, x : -40})
      .from(this.SubHead.nativeElement, {stagger : 0.5, duration : 1, x : -40, delay : -0.5})
      .from(this.bgImg.nativeElement, {stagger : 0.6, duration : 0.7, delay : -1,y : -50})

    t1.from(this.FbIcon.nativeElement, {y : 10, delay : 0.4})
      .from(this.InstaIcon.nativeElement, {y : 10, })
      .from (this.LinkedIn.nativeElement, {y : 10, })
      .from(this.TwitterIcon.nativeElement, {y : 10, })
  }

}
  
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Dashboard01';

  celinput : number;

  ferinput($event) {
    let cVal = ($event.target.value - 32) * 5/9;
    console.log(cVal);
    document.querySelector('.celsius').value = cVal.toString();
  }

  
  celInput($event) {
    let fVal = ($event.target.value*9/5) +32;
    console.log(fVal);
    document.querySelector('.ferhen').nodeValue = fVal.toString();
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
  constructor() { }

  transform(id: string): any {
    let minutos = this.convertMillisecondsToDigitalClock(id);
    return minutos;
  }

  convertMillisecondsToDigitalClock(ms) {
    let hours = Math.floor(ms / 3600000); // 1 Hour = 36000 Milliseconds
    let minutes = Math.floor((ms % 3600000) / 60000); // 1 Minutes = 60000 Milliseconds
    let seconds = Math.floor(((ms % 360000) % 60000) / 1000) // 1 Second = 1000 Milliseconds
    let s: string = seconds.toString();
    let m: string = minutes.toString();
    let h: string = hours.toString();
    if (seconds < 9) {
      s = '0' + s;
    }
    if (minutes < 9) {
      m = '0' + m;
    }
    if (hours < 9) {
      h = '0' + h;
    }

    return h + ":" + m + ":" + s

  }

}



import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-music-home',
  templateUrl: './music-home.component.html',
  styleUrls: ['./music-home.component.css']
})
export class MusicHomeComponent implements OnInit {

  // respuestArtista=true;
  seleccionada = '';
  ngOnInit(): void {
   
  }

  // toucherAuxPrincipal=(event:any)=>{
  //   this.respuestArtista=event;
  // }
}

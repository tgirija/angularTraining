import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Album } from 'src/app/albums/album.model';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;
  newPrice: any;

  @Output()
  albumClicked: EventEmitter<Album> = new EventEmitter<Album>();

  constructor() { }

  ngOnInit() {
    if (this.album.on_sale) {
      // Apply 10% discount
      this.newPrice = this.album.price - (this.album.price * .1);
      }
  }

  showAlbum() {
    this.albumClicked.emit(this.album);
   // alert('Album selected: ' + this.album.album_name);
  }

  logName() {
    console.log(this.album.artist);
  }

}

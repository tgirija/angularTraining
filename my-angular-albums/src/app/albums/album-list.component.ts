import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/albums/album.model';
import { ALBUMS } from 'src/app/albums/albums.data';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albumsArray: Album[];
  clickedAlbum: string;

  constructor() { }

  ngOnInit() {
    this.albumsArray = this.albumsArray = ALBUMS;
    console.log(this.albumsArray);
}


 parentFunctionHandler(album) {
    this.clickedAlbum = album.id + ":" + album.album_name;
    alert('Album ' + album.album_name + ' was sent from the album card component');
  }

}

import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/albums/album.model';
import { ALBUMS } from 'src/app/albums/albums.data';
import { AlbumService } from './shared/album.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albumsArray: Observable<Album[]>;
  clickedAlbum: string;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {

    this.getAlbums();
    console.log(this.albumsArray);
}

getAlbums() {
  this.albumsArray = this.albumService.getAlbums();
}


 parentFunctionHandler(album) {
    this.clickedAlbum = album.id + ":" + album.album_name;
    alert('Album ' + album.album_name + ' was sent from the album card component');
  }

}

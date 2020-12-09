import { UsersService } from './users.service';
import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";



//importar map reactive extentions

import { map } from "rxjs/operators";



@Injectable({

  providedIn: "root"

})

export class SpotifyService {

  constructor(private http: HttpClient, private usersService:UsersService) {
  }

  // Para  consulta generica
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    // Defino Headers que API de Spotify Necesita
    const headers = new HttpHeaders({
      Authorization:
        "Bearer " + JSON.parse(sessionStorage.getItem('token'))
    });
    return this.http.get(url, { headers });
  }
  getCategorias() {
    return this.getQuery("browse/categories").pipe(
      map(data =>  data["categories"].items)
    );
  }
  
  getExploracionUnicaCategorias(id:string) {
    return this.getQuery(`browse/categories/${id}/playlists`).pipe(
      map(data => data["playlists"].items)
    );
  }
  getTrackPlayList(id:string) {
    return this.getQuery(`playlists/${id}/tracks`).pipe(
      map(data => data["items"])
    );
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }
  // Referente al Search
  getArtistas(terminoArtist: string) {
    return this.getQuery(`search?q=${terminoArtist}&type=artist&limit=30`).pipe(
      map(data => data["artists"].items)
    );
  }


  getTracks(terminoTrack: string) {
    return this.getQuery(`search?q=${terminoTrack}&type=track&limit=30`).pipe(
      map(data => data["tracks"].items)
    );
  }

  getBusqueda(termino: string, tipo: string) {
    return this.getQuery(`search?q=${termino}&type=${tipo}&limit=15`).pipe(
      map(data => data[tipo + "s"].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe( map( data => data['artists'].items));
  }
  getTrack(id: string) {
    return this.getQuery(`tracks/${id}`).pipe(map((data: any) => data));
  }


  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }

  getAlbums(artistId: string) {
    return this.getQuery(`artists/${artistId}/albums`).pipe(map((data: any) => data.items));
  }

  getAlbum(albumId: string) {
    return this.getQuery(`albums/${albumId}`).pipe(map((data: any) => data));
  }

}

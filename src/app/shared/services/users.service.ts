import { PlayList } from './../model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  uriActiva = '';
  idUsuario = '';
  image = '';

  constructor(private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private authFire: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.authFire.signInWithEmailAndPassword(email, password);

  }

  signUp(email: string, password: string) {
    return this.authFire.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.authFire.signOut();
  }

  getIdUserActivo() {
    return this.authFire.currentUser;
  }
  hasSession(): Observable<boolean> {
    return this.authFire.authState.pipe(map(user => user === null ? false : true));
  }

  hasNotSession(): Observable<boolean> {
    return this.authFire.authState.pipe(map(user => user === null ? true : false));
  }

  setUser(user: User, id: string) {

    this.afs.collection('users').doc(id).set(user);
    return id;
  }
  getProfileUser(idUsuario: string): Observable<any> {
    return this.afs.collection('users').doc(idUsuario).get();
  }

  getTracksPlaylistsUser(idPlaylist: string): Observable<any> {
    return this.afs.collection('playlists').doc(idPlaylist).get();
  }

  getPlaylistsUser(playlist: string[]) {
    const playlistCollectionRef = this.afs.collection<PlayList>('playlists');
    return playlistCollectionRef.snapshotChanges().pipe(map(actions => {
      return actions.filter((elemtno: any) => playlist.includes(elemtno.payload.doc.id)).map(action => {
        const data = action.payload.doc.data() as PlayList;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    }));
  }

  addTrackUri(uriEntrada: string) {
    this.getIdUserActivo().then(id => {
      this.uriActiva = uriEntrada;
      this.afs.collection('users').doc(id.uid).update({ uri: uriEntrada });
    });
  }
  addPlayList(playList: PlayList, miUser: User, idUser: string): string {
    const id = this.afs.createId();
    this.afs.collection('playlists').doc(id).set(playList);
    miUser.playlists.push(id);
    this.afs.collection('users').doc(idUser).set(miUser, { merge: true });
    return id;
  }
  addTrackPlayList(idPlayList: string, item: PlayList, idTrack: string) {
    item.tracks.push(idTrack);
    this.afs.collection('playlists').doc(idPlayList).set(item, { merge: true });
  }

  setImagenProfile(file: File,  idUser: string) {
    const fileRef = this.storage.ref(`profiles/${idUser}`);
    return fileRef.put(file).then(async function (snapshot) {
      return await snapshot.ref.getDownloadURL();
    }).catch(res => console.log(res));
  }

  uploadPreview(file: File, idUser: string) {
    const fileRef = this.storage.ref(`preview/${idUser}preview.jpg`);
    return fileRef.put(file).then(async function (snapshot) {
      return await snapshot.ref.getDownloadURL();
    }).catch(res => console.log(res));
  }


  getImageProfiles(idUser: string) {
    return this.storage.storage.ref('profiles/' + idUser).getDownloadURL();
  }

  getImagePlaylists(imageName: string) {
    return this.storage.storage.ref('playlists/' + imageName).getDownloadURL();
  }


  deletePlayListUser(idPlayList: string, miUser: User, idUser: string) {
    this.afs.collection('playlists').doc(idPlayList).delete();
    this.afs.collection('users').doc(idUser).set(miUser, { merge: true });
  }
  deleteTrackPlayListUser(idPlayList: string, miPlaylist: PlayList) {
    this.afs.collection('playlists').doc(idPlayList).set(miPlaylist, { merge: true });
  }
}

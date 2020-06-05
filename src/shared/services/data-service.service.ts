import { Injectable } from '@angular/core';


import { Observable } from "rxjs";
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Car } from '../../app/pages/car/car.model';

import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  user: User;


  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public toastController: ToastController,
    private firestore: AngularFirestore,
    private storage: AngularFireStorage) {
      console.log('entro al constructor data service');
      this.launchLocalNotification();
      

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }


  // api user


  async registerUser(email: string, password: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);

  }

  async loginUser(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);


  }



  async  loginWithGoogle() {
    await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    this.router.navigate(['/']);
  }

  async logoutUser() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  get isLoggedUser(): boolean {
    const user = JSON.parse(localStorage.getItem('use'));
    return user !== null;
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      // position: 'top'

    });
    toast.present();
  }



  // recordatorios
  launchLocalNotification(){
    LocalNotifications.schedule({
      notifications: [
        {
          title: "Title",
          body: "Body",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          sound: null,
          attachments: null,
          actionTypeId: "",
          extra: null
        }
      ]
    });

  }
 
  


  // api firestore

  getCollection(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  createCollection(collection: string, objData: any) {
    return this.firestore.collection(collection).add(objData);
  }

  updateDoc(doc: string, id: string, objData: Car) {
    // siempre con /
    return this.firestore.doc(doc + id).update(objData);
  }


  deleteDoc(doc: string, docId: string) {
    // siempre con /
    return this.firestore.doc(doc + docId).delete();
  }



  public uploadImage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }


  public refImage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo).getDownloadURL();
  }




}

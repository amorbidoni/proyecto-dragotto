import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private angularFirestore : AngularFirestore) {}

  getAllProjectsFirestore():Observable<any> {
    return this.angularFirestore.collection('projects').snapshotChanges().pipe(
         map((item:any) => item.map((a:any) => {return {objectId:a.payload.doc.id, ...a.payload.doc.data()}} )
          )
    );
  }
  
}

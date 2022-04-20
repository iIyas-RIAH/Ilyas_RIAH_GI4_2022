import { Injectable } from '@angular/core';
import { Firestore, collectionData, orderBy, doc, addDoc,  docData} from '@angular/fire/firestore';
import { Formation } from "./Formation.model";
import { collection, query, where } from "firebase/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private firestore: Firestore) { }

  getFormation(): Observable<Formation[]> {
    const formationQuery = collection(this.firestore, 'Formation');
    const formationRef = query(formationQuery, orderBy("IdFormation"))
    return collectionData(formationRef, { idField: 'id' }) as Observable<Formation[]>;
  }

  getFormationByUser(UserID): Observable<Formation[]> {
    let formationQuery = collection(this.firestore, 'Subscription');
    let formationRef = query(formationQuery, where("UserID", "==", UserID), orderBy("IdFormation"));
    return collectionData(formationRef, { idField: 'id' }) as Observable<Formation[]>;
  }

  getFormationById(id): Observable<Formation[]> {
    const formationDocRef = doc(this.firestore, `Formation/${id}`);
    return docData(formationDocRef, { idField: 'id' }) as Observable<Formation[]>;
  }

  OnSubscribe(data) {
    const subRef = collection(this.firestore, 'Subscription');
    return addDoc(subRef, data);
  }

}
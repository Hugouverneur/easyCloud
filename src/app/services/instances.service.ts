import { DebugElement, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Instance } from '../models/instance.model';
import * as firebaseDb from 'firebase/database';
import { DataSnapshot } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class InstancesService {


  constructor() { }

  newInstance(instance: Instance) {
    const db = firebaseDb.getDatabase();
    return new Promise(
      (resolve, reject) => {
        firebaseDb.push(firebaseDb.ref(db, 'instances/'), instance).then(
          (success) => {
            resolve(success);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  getInstancesUser(uid: string) {
    const db = firebaseDb.getDatabase();
    return new Promise(
      (resolve, reject) => {
        firebaseDb.onValue(firebaseDb.ref(db, '/instances'), (data: DataSnapshot) => {
          resolve(data.val);
        },
        (error) => {
          reject(error);
        }
        );
      }
    );
  }


}

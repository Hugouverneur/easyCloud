import { DebugElement, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Instance } from '../models/instance.model';
import { child, equalTo, get, getDatabase, limitToFirst, onValue, orderByChild, orderByValue, push, query, ref, remove, update, } from 'firebase/database';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class InstancesService {

  instances: Instance[] = [];
  instancesSubject = new Subject<Instance[]>();

  instance!: Instance;

  constructor() {
    this.getInstancesUser();
  }

  emitInstances() {
    this.instancesSubject.next(this.instances);
  }

  newInstance(instance: Instance) {
    const db = getDatabase();
    return new Promise(
      (resolve, reject) => {
        push(ref(db, 'instances/'), instance).then(
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

  editInstance(instance: Instance, instanceId: string) {
    const db = getDatabase();
    const updates = {};
    updates['/instances/' + instanceId] = instance;
    return update(ref(db), updates);
  }

  deleteInstance(instanceId: string) {
    const db = getDatabase();
    return remove(ref(db, '/instances/' + instanceId));
  }

  getInstancesUser() {
    const db = getDatabase();
    const req = query(ref(db, '/instances'), orderByChild('uid'), equalTo(getAuth().currentUser!.uid));
    onValue(req, (data) => {
      this.instances = data.val() ? data.val() : [];
      this.emitInstances();
    });
  }

  getSingleInstance(id: string) {
    const db = getDatabase();
    return new Promise(
      (resolve, reject) => {
        get(child(ref(db), `/instances/${id}`)).then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

}

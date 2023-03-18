import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/mycontact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 baseUrl:string='http://localhost:3000/contacts'
  constructor(private http:HttpClient) { }
   
  getAllContacts():Observable<MyContact>{
      return this.http.get(this.baseUrl)
    }

    viewContact(contactId:string){
      return this.http.get(`${this.baseUrl}/${contactId}`)
    }
    
    getGroupName(groupId:string){
      return this.http.get('http://localhost:3000/groups/'+groupId)
    }

    getAllGroups(){
      return this.http.get('http://localhost:3000/groups')
    }

    addContacts(contactBody:any){
      return this.http.post(this.baseUrl,contactBody)
    }
  }


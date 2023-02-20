import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

header = new HttpHeaders().set('Authorization', '4f5vr34ftyh754b')
                      .set('Content-type','application/json')
                      
  constructor(private http : HttpClient) { }

getuser (){
   return this.http.get('http://localhost:3000/pakage',{'headers' : this.header})
}

postuser(obj:any){
  return this.http.post('http://localhost:3000/pakage',obj,{'headers' : this.header})
}
  putuser(id:any,obj:any){
    return this.http.put('http://localhost:3000/pakage/'+id,obj,{'headers':this.header})
  }

  deleteuser(id:any){
    return this.http.delete('http://localhost:3000/pakage/'+id,{'headers':this.header})
  }
}

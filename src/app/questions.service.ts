//define, what'll be used later on
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

// @Injectable decorator (function that augments a piece of code) 
// tells Angular that this service will be available everywhere
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  // contains namespace and type; 
  //shortcut for: constructor(http: HttpClient){this.http = http;}
  constructor(private http: HttpClient) {

   }
   public getJSON(fileId: string) {
     return this.http.get(`./assets/${fileId}.json`) as Observable<any>; // TypeScript type cast
   }
}
 
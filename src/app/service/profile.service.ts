<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

>>>>>>> cce416c8955ca2d0b1bdc3326fd3b93f7dae861c

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class ProfileService {

  constructor() { }
}
=======


export class ProfileService {
 private username:string;
private client_id = 'af93ef785cfb010769d2';
private client_secret = 'ceaf90465ea45b00e4a578e9a5fed40f21f37110';

constructor(private http:HttpClient) {
console.log("service is now ready!");
this.username = 'andrew1440';
   }

   getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
  	
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
  
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
>>>>>>> cce416c8955ca2d0b1bdc3326fd3b93f7dae861c

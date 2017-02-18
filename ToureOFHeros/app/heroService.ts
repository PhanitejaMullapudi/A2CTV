import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Headers, Http,Jsonp,URLSearchParams,Response } from '@angular/http';
import 'rxjs/RX';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ApiSearvice {
    ServiceUrl:string="http://localhost:61997/api/Hero/getHeros"
    HostedServiceUrl: string = "http://172.16.40.115:8081/api/Hero/getHeros";
    constructor(private http: Http,private Jp :Jsonp) {
    }
    getHeros(): Observable<Hero[]> {
        return this.http.get(this.ServiceUrl).map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            // .then(response => response.json().data as Hero[])
            // .catch(this.handleError);
        // let params = new URLSearchParams();
        // params.set('callback', 'JSONP_CALLBACK');
        // return this.Jp.get(this.ServiceUrl,params).toPromise().then(response => {console.log(response.json()); return response.json().data as Hero[];}).catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getHerosbyID(id:number):Observable<Hero[]>
    {
        let Geturl = this.ServiceUrl+"/"+id;
        return this.http.get(Geturl).map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
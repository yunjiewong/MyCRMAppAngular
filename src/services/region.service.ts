import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Region } from 'src/interface/region';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegionService {

  url:string=environment.apikey + environment.apiControllers.region;
  constructor(private httpClient: HttpClient) { }

  getRegion():Observable<Region[]>{
    return this.httpClient.get<Region[]>(this.url);
  }

  insertRegion(region:Region){
    return this.httpClient.post( this.url,region);
  }
  deleteRegion(id: any):Observable<any>
  {
    return this.httpClient.delete(this.url+"/"+ id);
  }

  getRegById(id:any):Observable<Region>{
    return this.httpClient.get<Region>(this.url+'/'+id);
  }

  updateRegion(region:Region):Observable<any>{
    return this.httpClient.put(this.url, region);
  }
}

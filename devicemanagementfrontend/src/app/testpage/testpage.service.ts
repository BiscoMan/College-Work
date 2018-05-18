import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {log} from 'util';
import {HttpClientJsonpModule} from '@angular/common/http';
import {map} from 'rxjs/operator/map';

export interface Customer {
    UserName: string;
    name: string;
    telephone: number;
    residence: string;
}

@Injectable()
export class TestpageService {
    // Instantiate the URL to the createDB endpoint in the backend server.
    private APIEndpoint = 'http://localhost:8182/server/';
    // Inject the http client into the service
    constructor(private http: Http) {}
    // Implement the createDB() method. This method should send an HTTP GET
    // request to the corresponding API endpoint on the backend server.
    createDB () {
        return this.http.get(this.APIEndpoint + 'createdb/').map(this.parseData);
    }
    insertCustomer() {
        const c = {} as Customer;
        c.UserName = 'asdasd';
        c.name = 'asd';
        c.telephone = 123;
        c.residence = 'casa';
       return this.http.post(this.APIEndpoint + 'customer/', JSON.stringify(c) );
    }
    // This method parses the result data to JSON
    private parseData(res: Response)  {
        return res.json();
    }

}

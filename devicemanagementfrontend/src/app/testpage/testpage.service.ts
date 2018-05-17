import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {log} from 'util';
import {HttpClientJsonpModule} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestpageService {
    // Instantiate the URL to the createDB endpoint in the backend server.
    private APIEndpoint_DataBase = 'http://localhost:8182/createdb/';
    private APIEndpoint_Customer = 'http://localhost:8182/customer/';
    // Inject the http client into the service
    constructor(private http: Http) {}
    // Implement the createDB() method. This method should send an HTTP GET
    // request to the corresponding API endpoint on the backend server.
    createDB () {
        return this.http.get(this.APIEndpoint_DataBase)
                    .map(this.parseData);
    }

    insertCustomer(customer) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Acess-Control-Allow-Origin','*');
        customer = JSON.stringify(customer);
        const aux = this.http.post(this.APIEndpoint_Customer, customer, {headers:headers})
                        .map(this.parseData);
        return aux;
    }

    // This method parses the result data to JSON
    private parseData(res: Response)  {
        return res.json();
    }
}

export class Customer {

    userName: string;
    name: string;
    telephone: number;
    residence: string;
}

export class Device {
    serialNumber: number;
    userName: string;
    model: string;
    friendlyName: string;
    deviceType: number;
}
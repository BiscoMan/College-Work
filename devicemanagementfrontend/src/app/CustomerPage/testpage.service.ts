import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers} from '@angular/http';
import {Customer} from 'app/Datamodel/Customer';
import 'rxjs/add/operator/map';
import {log} from 'util';
import {HttpClientJsonpModule} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestpageService {
    // Instantiate the URL to the createDB endpoint in the backend server.

    private APIEndpoint_Customer = 'http://localhost:8182/customer/';
    // Inject the http client into the service
    constructor(private http: Http) {}

    insertCustomer(Customer) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json' );
        headers.append('Acess-Control-Allow-Origin', '*' );
        Customer = JSON.stringify(Customer);
        const aux = this.http.post(this.APIEndpoint_Customer, Customer, {headers: headers})
                        .map(this.parseData);
        return aux;
    }

    // This method parses the result data to JSON
    private parseData(res: Response)  {
        if (Response) {
            alert('Customer added with success');
        }
        return res.json();
    }
}

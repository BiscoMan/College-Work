/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resources;

/**
 *
 * @author Gonçalo
 */
import Datamodel.Customer;
import java.util.ArrayList;
import org.restlet.resource.Get;
import org.restlet.resource.Post;

public interface CustomerResource {
    @Post
    public boolean insertCustomer (Customer c);
    
    @Get
    public ArrayList<String>  getCustomerstates ();
}

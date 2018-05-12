/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ServerResources;

import DatabaseManagement.DatabaseManagement;
import Datamodel.Customer;
import Resources.CustomerResource;
import java.util.ArrayList;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

/**
 *
 * @author Gonçalo
 */
public class CustomerServerResource extends ServerResource implements CustomerResource {

    private DatabaseManagement dbm;

    @Override
    protected void doInit() throws ResourceException {
        this.dbm = (DatabaseManagement) getContext().getAttributes().get("DBM");
    }

    @Override
    public boolean insertCustomer(Customer c) {
        String userName = c.getUserName();
        String name = c.getName();
        int telephone = c.getTelephone();
        String residence = c.getResidence();
        System.out.println(userName);
        boolean result = dbm.InsertCustomer(userName, name, telephone, residence);
        return result;
    }

    @Override
    public ArrayList<String> getCustomerstates(Customer c) {
        String userName = c.getUserName();
        ArrayList<String> result = dbm.getCustomerStates(userName);
        return result;
    }
}

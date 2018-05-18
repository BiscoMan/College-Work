/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ServerResources;

import DatabaseManagement.DatabaseManagement;
import Resources.DeviceStatesResource;
import java.util.ArrayList;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

/**
 *
 * @author gonca
 */
public class DeviceStatesServerResource extends ServerResource implements DeviceStatesResource{   
    private DatabaseManagement dbm;
    
    @Override
    protected void doInit() throws ResourceException {
        this.dbm = (DatabaseManagement) getContext().getAttributes().get("DBM");
    }
    
    @Override
    public ArrayList<String> getStates(){
        ArrayList<String> result = dbm.getStates();
        return result;
    }
    
}

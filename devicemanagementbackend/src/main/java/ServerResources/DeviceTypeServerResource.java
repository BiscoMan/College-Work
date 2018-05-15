/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ServerResources;

import DatabaseManagement.DatabaseManagement;
import Resources.DeviceTypeResource;
import java.util.ArrayList;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

/**
 *
 * @author gonca
 */
public class DeviceTypeServerResource extends ServerResource implements DeviceTypeResource{
     private DatabaseManagement dbm;
     
     @Override
    protected void doInit() throws ResourceException {
        this.dbm = (DatabaseManagement) getContext().getAttributes().get("DBM");
    }
     
     @Override
     public ArrayList<String> getDeviceTypes(){
         ArrayList<String> result = dbm.getDeviceTypes();
         return result;
     }
    
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ServerResources;

import DatabaseManagement.DatabaseManagement;
import Datamodel.Device;
import org.restlet.resource.ResourceException;
import Resources.DeviceFriendlyNameResource;
import org.restlet.resource.ServerResource;

/**
 *
 * @author gonca
 */
public class DeviceFriendlyNameServerResource extends ServerResource implements DeviceFriendlyNameResource{
    private DatabaseManagement dbm;
    
    @Override
    protected void doInit() throws ResourceException {
        this.dbm = (DatabaseManagement) getContext().getAttributes().get("DBM");
    }
    
    @Override
    public String getMyDeviceFriendlyName(Device d){
        String result = dbm.getMyDeviceFriendlyName(Integer.toString(d.getserialNumber()));
        return result;
    }
    
}

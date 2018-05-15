/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ServerResources;

import DatabaseManagement.DatabaseManagement;
import Datamodel.Customer;
import Datamodel.Device;
import Resources.CustomerDeviceResource;
import java.util.ArrayList;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

/**
 *
 * @author gonca
 */
public class CustomerDeviceServerResource extends ServerResource implements CustomerDeviceResource {
    private DatabaseManagement dbm;
    
    @Override
    protected void doInit() throws ResourceException {
        this.dbm = (DatabaseManagement) getContext().getAttributes().get("DBM");
    }
    
    @Override
    public boolean AssociateDevice(Device d){
        int serialNumber = d.getserialNumber();
        String userName = d.getusername();
        String model = d.getModel();
        String friendlyName = d.getfriendlyName();
        int deviceType = d.getdeviceType();
        boolean result = dbm.AssociateDevice(serialNumber, userName, model, friendlyName, deviceType);
        return result;
    }
    
    @Override
    public ArrayList<String> getMyDevices(){
        String Id = (String) (this.getRequest().getAttributes().get("username"));
        ArrayList<String> CustomerDevices = new ArrayList<>();
        CustomerDevices = dbm.getMyDevices(Id);
        return CustomerDevices;
    }
    
}

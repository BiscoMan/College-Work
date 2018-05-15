/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ServerResources;

import DatabaseManagement.DatabaseManagement;
import Resources.DeviceResource;
import java.util.ArrayList;
import org.restlet.resource.ServerResource;
import Datamodel.Device;
import org.restlet.resource.ResourceException;
import java.text.ParseException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Gonçalo
 */
public class DeviceServerResource extends ServerResource implements DeviceResource {

    private DatabaseManagement dbm;

    @Override
    protected void doInit() throws ResourceException {
        this.dbm = (DatabaseManagement) getContext().getAttributes().get("DBM");
    }

    @Override
    public ArrayList<String> getDeviceStates(Device d) {
        int serialNumber = d.getserialNumber();
        ArrayList<String> result = dbm.getDeviceStates(Integer.toString(serialNumber));
        return result;
    }

}

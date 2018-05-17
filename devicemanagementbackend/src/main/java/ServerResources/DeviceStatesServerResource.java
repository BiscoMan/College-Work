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
import Datamodel.Device_State;
import java.text.ParseException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author gonca
 */
public class DeviceStatesServerResource extends ServerResource implements DeviceStatesResource {

    private DatabaseManagement dbm;

    @Override
    protected void doInit() throws ResourceException {
        this.dbm = (DatabaseManagement) getContext().getAttributes().get("DBM");
    }

    @Override
    public boolean insertStates(Device_State d) {
        try {
            int serialNumber = d.getSerialNumber();
            int state = d.getState();
            int error = d.getError();
            int energyProduction = d.getEnergyProduction();
            System.out.println(serialNumber);
            System.out.println(state);
            System.out.println(error);
            System.out.println(energyProduction);
            boolean result = dbm.insertState(serialNumber, state, error, energyProduction);
            return result;
        } catch (ParseException ex) {
            Logger.getLogger(DeviceStatesServerResource.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }

    @Override
    public ArrayList<String> getStates() {
        ArrayList<String> result = dbm.getStates();
        return result;
    }
}

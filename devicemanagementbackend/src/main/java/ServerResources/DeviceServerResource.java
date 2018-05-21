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
import Datamodel.state;
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
    public boolean insertState(String s) {
        String[] s1 = s.split(",");                             //dividir o json em substrings que estavam separadas por vírgulas
        String[] s2 = new String[4];                        
        boolean result = true;
        for(int i = 0, k = 0; i < s1.length; i++, k++){
            String[] s3 = s1[i].split(":");                     //dividir a string anterior em subtrings com o valor após os ":"
            s2[k] = s3[1];                                      //guardar na string s2 os valores do json
        }    
        
        System.out.println("EnergyProduction: " + s2[3].replace("}",""));
        int serialNumber = Integer.parseInt(s2[0]);
        int deviceState = Integer.parseInt(s2[1]);
        int error = Integer.parseInt(s2[2]);
        int energyProduction = Integer.parseInt(s2[3].replace("}","")); 
        System.out.println("Serial Number: "  + serialNumber);
        System.out.println("Device State: " + deviceState);
        System.out.println("EnergyProduction: " + energyProduction);
        
        try {
            result = dbm.insertState(serialNumber, deviceState, error, energyProduction);
        } catch (ParseException ex) {
            Logger.getLogger(DeviceServerResource.class.getName()).log(Level.SEVERE, null, ex);
        }
        return result;
    }

    @Override
    public ArrayList<String> getDeviceStates() {
        String serialNumber = (String) (this.getRequest().getAttributes().get("serialNumber"));
        ArrayList<String> DeviceState = new ArrayList<>();
        DeviceState = dbm.getDeviceStates(serialNumber);
        System.out.println(DeviceState);
        return DeviceState;
    }
}

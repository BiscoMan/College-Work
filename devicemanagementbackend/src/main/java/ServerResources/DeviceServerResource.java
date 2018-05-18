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
        //System.out.println("DENTRO: " + s);
        String[] splited = s.split(",");    
        String[] splited_aux = new String[4];
        boolean result=true;
        for(int i=0,k=0; i<splited.length;i++,k++){
            String[] splited1 = splited[i].split(":");
            splited_aux[k] = splited1[1];
        }    
        int serialNumber=Integer.parseInt(splited_aux[0]);
        int deviceState=Integer.parseInt(splited_aux[1]);
        int error=Integer.parseInt(splited_aux[2]);
        int en_production=Integer.parseInt(splited_aux[3].substring(0,1));
        System.out.println("CALLED INSERT STATE with serial:"+serialNumber+" and STATE:" + deviceState+" and error:" + error +" and en_production:" + en_production);
        try {
            result = dbm.insertState(serialNumber, deviceState, error, en_production);
        } catch (ParseException ex) {
            Logger.getLogger(DeviceServerResource.class.getName()).log(Level.SEVERE, null, ex);
        }
        return result;
    }

    @Override
    public ArrayList<String> getDeviceStates() {
        ArrayList<String> result = new ArrayList<String>();
        return result;
    }

}

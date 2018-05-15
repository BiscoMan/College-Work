/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Datamodel;

/**
 *
 * @author gonca
 */
public class Device {

    String model;
    String friendlyName;
    String username;
    int deviceType;
    int serialNumber;

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getfriendlyName() {
        return friendlyName;
    }

    public void setfriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
    }
    
    public void setusername(String username) {
        this.username = username;
    }

    public String getusername() {
        return username;
    }
    
    public int getdeviceType() {
        return deviceType;
    }
      
    public void setdeviceType(int deviceType){
        this.deviceType = deviceType;
    }

    public int getserialNumber() {
        return serialNumber;
    }

    public void setserialNumber(int serialNumber) {
        this.serialNumber = serialNumber;
    }

}

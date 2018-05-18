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
public class state {
    int SerialNumber;
    int state;
    int error;
    int energyProduction;
        
    public int getSerialNumber(){
        return SerialNumber;
    }
   
    public void setSerialNumber(int serialNumber){
        this.SerialNumber = serialNumber;
    }
    
    public int getState(){
        return state;
    }
   
    public void setState(int state){
        this.state = state;
    }
    
    public int getError(){
        return error;
    }
   
    public void setError(int error){
        this.error = error;
    }
    
    public int getEnergyProduction(){
        return energyProduction;
    }
   
    public void setEnergyProduction(int energyProduction){
        this.energyProduction = energyProduction;
    }
}

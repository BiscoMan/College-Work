/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resources;

import java.util.ArrayList;
import org.restlet.resource.Get;

/**
 *
 * @author gonca
 */
public interface DeviceTypeResource {
    @Get
    public ArrayList<String> getDeviceTypes();
    
}

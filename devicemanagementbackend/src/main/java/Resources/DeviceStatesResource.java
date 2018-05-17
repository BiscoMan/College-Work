/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resources;

import java.util.ArrayList;
import org.restlet.resource.Get;
import org.restlet.resource.Post;
import Datamodel.Device_State;

/**
 *
 * @author gonca
 */
public interface DeviceStatesResource {

    @Post
    public boolean insertStates(Device_State d);
    
    @Get
    public ArrayList<String> getStates();
}

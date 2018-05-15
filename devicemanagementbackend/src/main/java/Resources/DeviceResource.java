/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resources;

import java.util.ArrayList;
import org.restlet.resource.Get;
import org.restlet.resource.Post;
import Datamodel.Device;

/**
 *
 * @author Gonçalo
 */
public interface DeviceResource {

    @Get
    public ArrayList<String> getDeviceStates(Device d);
}

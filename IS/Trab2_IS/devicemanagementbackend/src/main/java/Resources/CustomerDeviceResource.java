/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Resources;
import Datamodel.Customer;
import Datamodel.Device;
import java.util.ArrayList;
import org.restlet.resource.Get;
import org.restlet.resource.Post;

/**
 *
 * @author gonca
 */
public interface CustomerDeviceResource {
    @Post
    public boolean AssociateDevice(Device d);
    
    @Get
    public ArrayList<String> getMyDevices();
    
}

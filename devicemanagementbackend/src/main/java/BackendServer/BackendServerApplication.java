package BackendServer;

import DatabaseManagement.DatabaseManagement;
import ServerResources.CustomerDeviceServerResource;
import ServerResources.CustomerServerResource;
import ServerResources.DatabaseServerResource;
import ServerResources.DeviceFriendlyNameServerResource;
import ServerResources.DeviceServerResource;
import ServerResources.DeviceStatesServerResource;
import ServerResources.DeviceTypeServerResource;
import org.restlet.Application;
import org.restlet.Restlet;
import org.restlet.routing.Router;
import org.restlet.service.CorsService;

import java.util.Arrays;
import java.util.HashSet;


public class BackendServerApplication extends Application {

    private DatabaseManagement dbm;

    public BackendServerApplication(DatabaseManagement dbm) {
        this.dbm = dbm;
        this.setName("IS Backend Server");
        this.setDescription("Backend Server");
        this.setOwner("UNINOVA");
        this.setAuthor("Ricardo Silva Peres");

        CorsService corsService = new CorsService();
        corsService.setAllowedOrigins(new HashSet(Arrays.asList("*")));
        corsService.setAllowedCredentials(true);
        getServices().add(corsService);
    }

    @Override
    public Restlet createInboundRoot() {

        Router router = new Router(getContext());

        //Service routes
        router.attach("/createdb/", DatabaseServerResource.class);
        router.attach("/customer/", CustomerServerResource.class);
        router.attach("/device/", DeviceServerResource.class);
        router.attach("/customerdevice/", CustomerDeviceServerResource.class);
        router.attach("/devicefriendlyname/", DeviceFriendlyNameServerResource.class);
        router.attach("/devicestates/", DeviceStatesServerResource.class);
        router.attach("/devicetype/", DeviceTypeServerResource.class);
        router.getContext().getAttributes().put("DBM", this.dbm);

        return router;

    }

}

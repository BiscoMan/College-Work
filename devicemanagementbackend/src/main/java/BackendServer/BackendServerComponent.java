package BackendServer;

import DatabaseManagement.DatabaseManagement;
import org.restlet.Component;
import org.restlet.data.Protocol;

public class BackendServerComponent extends Component{

    private final int port = 8182;
    private final DatabaseManagement dbm;

    public BackendServerComponent(DatabaseManagement dbm) {
        this.dbm = dbm;
        this.setName("IS Backend Server");
        this.setDescription("Backend Server");
        this.setOwner("UNINOVA");
        this.setAuthor("Ricardo Silva Peres");
        this.getServers().add(Protocol.HTTP, this.port);
        this.getDefaultHost().attachDefault(new BackendServerApplication(dbm));
    }
}

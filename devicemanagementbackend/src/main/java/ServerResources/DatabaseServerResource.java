package ServerResources;

import DatabaseManagement.DatabaseManagement;
import Resources.DatabaseResource;
import org.restlet.resource.ResourceException;
import org.restlet.resource.ServerResource;

public class DatabaseServerResource extends ServerResource implements DatabaseResource {

    private DatabaseManagement dbm;

    @Override
    protected void doInit() throws ResourceException {
        this.dbm = (DatabaseManagement) getContext().getAttributes().get("DBM");
    }

    @Override
    public String createDB() {
        boolean result = dbm.createDB();
        return Boolean.toString(result);
    }
    
    

}

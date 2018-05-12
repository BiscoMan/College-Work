package BackendServer;

import DatabaseManagement.DatabaseManagement;

public class StartBackendServer {

    public static void main(String[] args) {
        DatabaseManagement dbm = new DatabaseManagement();
        try {
            new BackendServerComponent(dbm).start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}

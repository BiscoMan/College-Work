package Resources;

import org.restlet.resource.Get;

public interface DatabaseResource {
    @Get
    public String createDB();
}


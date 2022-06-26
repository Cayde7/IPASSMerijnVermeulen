package nl.hu.ipass.setup.webservices.response;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

public class champResponse {

    @GET
    @Path("/champMatchUp")
    @Produces("application/json")
    public Response getCustomer(@PathParam("html") String html){
        return Response.ok().build();
    }
}

package nl.hu.ipass.setup.webservices.response;

import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/index")
public class signInResponse {
    @POST
    @Path("/signIn")
    @Produces(MediaType.APPLICATION_JSON)
    public Response createUser(@FormParam("usernameSignUp") String name) {
        return Response.ok(name).build();
    }
}

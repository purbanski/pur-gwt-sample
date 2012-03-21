package pacifica.recherche.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import pur.gwtplatform.samples.model.Data;

@Path("/mp/")
public class IndexService {


	@GET
	@Produces("application/xml")
	@Path("search/{query}")
	public Data search(@PathParam("query") String query) {

		
		return new Data("id", "value");
	}

	@GET
	@Produces("application/json")	
	@Path("get")
	public Data get() {

		
		return new Data("id", "value");
	}
}

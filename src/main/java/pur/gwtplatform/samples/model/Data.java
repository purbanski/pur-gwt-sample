package pur.gwtplatform.samples.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "Data")
public class Data {

	private String id;
	private String value;
	public Data(String id, String value) {
		this.id = id;
		this.value = value;
	}

	public Data() {
		super();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

}

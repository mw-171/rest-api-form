package net.javaguides.springboot.model;


import jakarta.persistence.*;

@Entity@Table(name= "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="client_id")
    private int client_id;

    @Column(name="given_name")
    private String given_name;

    @Column(name="family_name")
    private String family_name;

    public User(){

    }

    public User(int client_id, String given_name, String family_name){
        super();
        this.client_id=client_id;
        this.given_name=given_name;
        this.family_name=family_name;
    }

  public long getId() {
		return id;
	}

  public void setId(long id) {
		this.id = id;
	}

  public int getClientId() {
		return client_id;
	}
	public void setSelectedClientId(int client_id) {
		this.client_id = client_id;
	}

  public String getGivenName() {
		return given_name;
	}
	public void setGivenName(String given_name) {
		this.given_name = given_name;
	}
	public String getFamilyName() {
		return family_name;
	}
	public void setFamilyName(String family_name) {
		this.family_name = family_name;
	}
	

}

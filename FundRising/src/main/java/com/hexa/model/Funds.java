package com.hexa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ApbTrust")
public class Funds {
	@Id
	@Column
    private int id;
	@Column
	private String donorName;
	@Column
	private long amount;
	
	
	public Funds() {}
	
	
	public Funds(int id, String donorName, long amount) {
		super();
		this.id = id;
		this.donorName = donorName;
		this.amount = amount;
	}
	@Override
	public String toString() {
		return "Funds [id=" + id + ", donorName=" + donorName + ", amount=" + amount + "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDonorName() {
		return donorName;
	}
	public void setDonorName(String donorName) {
		this.donorName = donorName;
	}
	public long getAmount() {
		return amount;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	
	
	
}

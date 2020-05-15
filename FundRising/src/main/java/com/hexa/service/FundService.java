package com.hexa.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hexa.repository.FundRepository;
import com.hexa.model.Funds;
@Service
public class FundService {

	@Autowired
	FundRepository fr;
	
	public List<Funds> getAllFunds() {
		List<Funds> funds = new ArrayList<Funds>();
		fr.findAll().forEach(funds1 -> funds.add(funds1));
		return funds;
	}
	public Funds getFundsbyId(int id) {
		return fr.findById(id).get();
	}
	public void saveorupdate(Funds funds) {
		 fr.save(funds);
	}
	public void delete(int id) {
		fr.deleteById(id);
	}
	public void saveorupdate(Funds funds,int id) {
		fr.save(funds);
	}
}

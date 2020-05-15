package com.hexa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hexa.model.Funds;
import com.hexa.service.FundService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController


public class FundController {
	@Autowired
	FundService fs;
	
@GetMapping("/funds")
private List<Funds> getAllFunds() {
	 return fs.getAllFunds();
}
@GetMapping("/funds/{id}")
private Funds getById(@PathVariable("id")int id) {
	return fs.getFundsbyId(id);
}
@DeleteMapping("/funds/{id}")
private void delete(@PathVariable("id") int id) {
	fs.delete(id);
}
@PostMapping("/funds")
private int save(@RequestBody Funds funds) {
	fs.saveorupdate(funds);
	return funds.getId();
}
@PutMapping("/funds/edit/{id}")
private Funds update(@RequestBody Funds funds) {
	fs.saveorupdate(funds);;
	return funds;
}
}


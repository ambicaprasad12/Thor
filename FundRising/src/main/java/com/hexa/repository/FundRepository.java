package com.hexa.repository;

import org.springframework.data.repository.CrudRepository;
import com.hexa.model.Funds;

public interface FundRepository extends CrudRepository<Funds,Integer> {

}

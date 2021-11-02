package com.robin.shoppingapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robin.shoppingapp.entity.Address;

public interface AddressRepository extends JpaRepository<Address, Integer> {
	
}

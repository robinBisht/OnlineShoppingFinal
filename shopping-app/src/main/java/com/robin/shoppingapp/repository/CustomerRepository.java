package com.robin.shoppingapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robin.shoppingapp.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{
}

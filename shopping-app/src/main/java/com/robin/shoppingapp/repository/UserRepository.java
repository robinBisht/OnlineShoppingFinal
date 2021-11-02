package com.robin.shoppingapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.robin.shoppingapp.entity.Customer;
import com.robin.shoppingapp.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	User findByUsername(String username);
	User findByUsernameAndPassword(String username,String password);
}

package com.robin.shoppingapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robin.shoppingapp.entity.Customer;
import com.robin.shoppingapp.entity.User;
import com.robin.shoppingapp.repository.CustomerRepository;
import com.robin.shoppingapp.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	public User addNewUser(User user) throws Exception {
		if( findByUsername( user.getUsername() ) != null ) {
			throw new Exception("The username you provided is already exist");
		}
		return userRepository.save(user);
	}
	
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	public User findUser(String username,String password) {
		return userRepository.findByUsernameAndPassword(username,password);
	}
	public List<User> viewAllUsers(){
		List<User> allUsers = userRepository.findAll();
		return allUsers;
	}
	public User viewUser(Integer id) {
		return userRepository.findById(id).get();
	}
	
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	public void removeUser(Integer id) {
		userRepository.deleteById(id);
	}
	
	public Customer setCustomer(Integer id, Integer customerId) {
		User user = userRepository.findById(id).get();
		Customer customer = customerRepository.findById(customerId).get();
		user.setCustomer(customer);
		customer.setUser(user);
		User userUpdated = userRepository.save(user);
		Customer customerAdded = user.getCustomer();
		return customerAdded;
	}
	public Customer findCustomer(Integer id) {
		return userRepository.findById(id).get().getCustomer();
	}
	
}

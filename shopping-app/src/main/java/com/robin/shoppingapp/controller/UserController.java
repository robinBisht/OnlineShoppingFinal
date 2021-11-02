package com.robin.shoppingapp.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.authentication.UserServiceBeanDefinitionParser;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.robin.shoppingapp.entity.Customer;
import com.robin.shoppingapp.entity.User;
import com.robin.shoppingapp.repository.UserRepository;
import com.robin.shoppingapp.service.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(path="/users")
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping("")
	public List<User> findAll(){
		return userService.viewAllUsers();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> findUser(@PathVariable("id") Integer id){
		User user =  userService.viewUser(id);
		return new ResponseEntity<User>(user,HttpStatus.OK);
	}
	@GetMapping("/{id}/{customerId}")
	public ResponseEntity<Customer> setCustomer(@PathVariable("id") String id,@PathVariable("customerId") Integer customerId){
		Customer customer = userService.setCustomer( Integer.valueOf(id) , customerId );
		return new ResponseEntity<Customer>(customer,HttpStatus.OK);
	}
	@GetMapping("/{id}/customer")
	public ResponseEntity<Customer> setCustomer(@PathVariable("id") Integer id){
		Customer customer = userService.findCustomer(id);
		return new ResponseEntity<Customer>(customer,HttpStatus.OK);
	}
	@GetMapping("/login/{username}/{password}")
	public ResponseEntity<User> findUser(@PathVariable("username") String username,@PathVariable("password") String password ) throws Exception{
		User user = userService.findUser(username, password);
		if(user == null) throw new NoSuchElementException();
		return new ResponseEntity<User>(user,HttpStatus.OK);
	}
	
	@PostMapping(value = "/create",
	        consumes = MediaType.APPLICATION_JSON_VALUE,
	        produces = MediaType.APPLICATION_JSON_VALUE
	)
	public User createUser(@RequestBody User user) throws Exception {
		return userService.addNewUser(user);
	}
	
	@PutMapping(value = "/{id}/update",
	        consumes = MediaType.APPLICATION_JSON_VALUE,
	        produces = MediaType.APPLICATION_JSON_VALUE
	)
	public User updateUser(@RequestBody User user,@PathVariable("id") Integer id) {
		user.setUserId(id);
		return userService.updateUser(user);
	}
	
	@DeleteMapping(value="/{id}/delete")
	public String deleteUser(@PathVariable("id") Integer id) {
		User user = userService.viewUser(id);
		userService.removeUser(id);
		return "User with username "+user.getUsername()+" is deleted";
	}
	
}

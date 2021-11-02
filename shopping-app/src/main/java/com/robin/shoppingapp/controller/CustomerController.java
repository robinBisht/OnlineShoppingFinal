package com.robin.shoppingapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.robin.shoppingapp.entity.Address;
import com.robin.shoppingapp.entity.Cart;
import com.robin.shoppingapp.entity.Customer;
import com.robin.shoppingapp.entity.Product;
import com.robin.shoppingapp.repository.CartRepository;
import com.robin.shoppingapp.service.AddressService;
import com.robin.shoppingapp.service.CustomerService;
import com.robin.shoppingapp.service.ProductService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(path="/customers")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	
	@GetMapping("")
	public List<Customer> findAll(){
		return customerService.viewAllCustomers();
	}
	
	@GetMapping("/{id}")
	public Customer getOne(@PathVariable("id") Integer customerId) {
		return customerService.viewCustomer(customerId);
	}
	@PostMapping(value = "/create",
	        consumes = MediaType.APPLICATION_JSON_VALUE,
	        produces = MediaType.APPLICATION_JSON_VALUE
	)
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
		customerService.addCustomer(customer);
		return ResponseEntity.ok(customer);
	}
	@PutMapping("/{id}/update")
    public ResponseEntity edit(@PathVariable("id") Integer customerId,
                               @RequestBody Customer customer) {
		customer.setCustomerId(customerId);
		customerService.updateCustomer(customer);
        return ResponseEntity.ok( customer);
    }
	@DeleteMapping("/{id}/delete")
    public ResponseEntity delete(@PathVariable("id") Integer customerId) {
		Customer customer = customerService.viewCustomer(customerId);
        customerService.removeCustomerById(customerId);
        return ResponseEntity.ok().build();
    }
	
	@PostMapping("/{id}/address/{aid}/create")
	public Address addAddress(@PathVariable("id") Integer customerId, @PathVariable("aid") Integer addressId  ) {
		return customerService.addAddress(customerId, addressId);
	}
	@GetMapping("/{id}/address")
	public Address getAddress(@PathVariable("id") Integer customerId) {
		return customerService.viewCustomer(customerId).getAddress();
	}
	
}

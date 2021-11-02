package com.robin.shoppingapp.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.robin.shoppingapp.entity.Address;
import com.robin.shoppingapp.entity.Cart;
import com.robin.shoppingapp.entity.Customer;
import com.robin.shoppingapp.repository.AddressRepository;
import com.robin.shoppingapp.repository.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private AddressRepository addressRepository;
	
	public List<Customer> viewAllCustomers(){
		return customerRepository.findAll();
	}

	public Customer viewCustomer(Integer id) {
		return customerRepository.findById(id).get();
	}
	public void removeCustomer(Customer customer) {
		customerRepository.delete(customer);
	}
	public void removeCustomerById(Integer customerId) {
		customerRepository.deleteById(customerId);;
	}
	public Customer addCustomer(Customer customer) {
		
		Cart cart = new Cart();
		customer.setCart(cart);
		cart.setCustomer(customer);
		return customerRepository.save(customer);
	}
	public Customer updateCustomer(Customer customer) {
		return customerRepository.save(customer);
	}
	public Address addAddress(Integer customerId,Integer addressId) {
		Customer customer = customerRepository.findById(customerId).get();
		Address address = addressRepository.findById(addressId).get();
		if( customer.getAddress() == null ) {
			customer.setAddress(address);
			address.setCustomer(customer);
			return addressRepository.save(address);
		}
		else {
			Address toDeleteAddress = customer.getAddress();
			customer.setAddress(null);
			addressRepository.deleteById(toDeleteAddress.getAddressId());
			customer.setAddress(address);
			address.setCustomer(customer);
			return addressRepository.save(address);
		}

	}
	
}

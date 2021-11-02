package com.robin.shoppingapp.service.test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robin.shoppingapp.entity.Address;
import com.robin.shoppingapp.entity.Customer;
import com.robin.shoppingapp.service.AddressService;
import com.robin.shoppingapp.service.CustomerService;

@SpringBootTest
class AddressServiceTest {

	@Autowired
	private AddressService addressService;
	
	@Test
	void createAddressTest() {
		
		Address address = new Address("25","Ganga","Dehradun","Uttarakhand","India","248001");
		Address saveAddress = addressService.addAddress(address);
		assertEquals(address.getAddressId(), saveAddress.getAddressId());
	}
	
	@Test
	void updateAddressTest() {
		Address address = addressService.viewAddress(1);
		address.setPincode("123456");
		//updating customer
		Address saveAddress = addressService.updateAddress(address);
		assertEquals(address.getPincode(),saveAddress.getPincode() );
}
}

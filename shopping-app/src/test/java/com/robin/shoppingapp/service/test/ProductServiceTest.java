package com.robin.shoppingapp.service.test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.robin.shoppingapp.entity.Customer;
import com.robin.shoppingapp.entity.Product;
import com.robin.shoppingapp.service.CustomerService;
import com.robin.shoppingapp.service.ProductService;

@SpringBootTest
class ProductServiceTest {
	@Autowired
	private ProductService productService;
	
	@Test
	void createProductTest() {
		
		Product product = new Product("Google pixel 6",55000.00,"red","6.5inch","tensor chip","Google",10);
		Product saveProdcut = productService.addProduct(product);;
		assertEquals(saveProdcut.getProductId(), product.getProductId());;
	}
	
	
	@Test
	void updateProductTest() {
		Product product = productService.viewProduct(1);
		product.setProductName("Pixel 6");
		Product updatedProduct = productService.updateProduct(product);
		assertEquals(product.getProductName(),updatedProduct.getProductName());
	}

}

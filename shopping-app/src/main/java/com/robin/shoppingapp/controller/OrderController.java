package com.robin.shoppingapp.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.robin.shoppingapp.entity.Customer;
import com.robin.shoppingapp.entity.Order;
import com.robin.shoppingapp.entity.Product;
import com.robin.shoppingapp.service.CustomerService;
import com.robin.shoppingapp.service.OrderService;
import com.robin.shoppingapp.service.ProductService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/orders")
public class OrderController {
	@Autowired
	private OrderService orderService;
	
	@GetMapping("")
	public List<Order> getOrders(){
		return orderService.viewAllOrder();
	}
	@GetMapping("/{oid}")
	public Order getOrderById(@PathVariable("oid") Integer orderId) {
		return orderService.viewOrderById(orderId);
	}
	@Transactional
	@PostMapping("/customer/{cid}/product/{pid}/create")
	public ResponseEntity<Order> createNew(@RequestBody Order order,@PathVariable("cid") Integer customerId, @PathVariable("pid") Integer productId ) {
		orderService.addOrder(productId,customerId,order);
		return ResponseEntity.ok(order);
	}
	@Transactional
	@PutMapping("/{oid}/update")
	public ResponseEntity<Order> update(@RequestBody Order order,@PathVariable("cid") Integer customerId, @PathVariable("oid") Integer orderId ) {
		order.setOrderId(orderId);
		orderService.updateOrder(order);
		return ResponseEntity.ok(order);
	}
	@DeleteMapping("/{oid}/delete")
	public ResponseEntity delete(@PathVariable("oid") Integer orderId) {
        orderService.removeOrder(orderId);
        return ResponseEntity.ok().build();
    }
}

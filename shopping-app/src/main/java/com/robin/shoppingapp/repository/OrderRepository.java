package com.robin.shoppingapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robin.shoppingapp.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {

}

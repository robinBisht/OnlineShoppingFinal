package com.robin.shoppingapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robin.shoppingapp.entity.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {

}

package com.robin.shoppingapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.robin.shoppingapp.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}

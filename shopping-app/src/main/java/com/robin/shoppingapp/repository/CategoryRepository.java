package com.robin.shoppingapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robin.shoppingapp.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}

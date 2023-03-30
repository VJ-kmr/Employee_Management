package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Admin;

@Repository
public interface AdminDao extends JpaRepository<Admin,Integer> {

	Admin getByEmail(String email);

	
	
}

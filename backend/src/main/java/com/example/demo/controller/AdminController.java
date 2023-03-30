package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.AdminDao;
import com.example.demo.model.Admin;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private AdminDao adao;
	
	@PostMapping("/login")
	public ResponseEntity<?> adminLogin(@RequestBody Admin admin) {
		Admin a1=adao.getByEmail(admin.getEmail());
		if(a1.getPassword()==admin.getPassword()) {
			return ResponseEntity.ok(a1);
		}
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
	
	
	
	

}

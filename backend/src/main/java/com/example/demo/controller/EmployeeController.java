package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.example.demo.model.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@RequestMapping("/employeemgt")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	@Autowired
	private EmployeeService eservice;
	
	@PostMapping("/add")
	public ResponseEntity<Employee>  addemployee(@RequestBody Employee e) {
		Employee employee=eservice.addEmployee(e);
		return new ResponseEntity<>(employee , HttpStatus.OK);
	}
	
	@GetMapping("/viewall")
	public ResponseEntity<List<Employee>> viewAllEmployee(){
		List<Employee> employees= eservice.getAllEmployees();
		return new ResponseEntity<>(employees,HttpStatus.OK);
		
	}
	@GetMapping("/view/{empid}")
	public ResponseEntity<Employee> viewEmployee(@PathVariable int empid) {
		Employee employee=eservice.viewEmployee(empid);
		return new ResponseEntity<>(employee , HttpStatus.OK);
	
	}
	
	@PutMapping("/update")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee e) {
		Employee employee=eservice.updateEmployee(e);
		return new ResponseEntity<>(employee,HttpStatus.OK);
	}
	
	@DeleteMapping("delete/{empid}")
	public ResponseEntity<?> deleteEmployee(@PathVariable int empid) {
		eservice.deleteEmployee(empid);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}

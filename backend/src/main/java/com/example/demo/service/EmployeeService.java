package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.EmployeeDao;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.Employee;


@Service
public class EmployeeService {
	@Autowired
	private EmployeeDao edao;
	
	public List<Employee> getAllEmployees() {
        return edao.findAll();
    }
	
	public Employee addEmployee(Employee e) {
		return edao.save(e);
	}
	
	public Employee viewEmployee(int empid) {
		return edao.findById(empid).orElseThrow(() -> new UserNotFoundException("User by id"+ empid +"was not found")) ;
		
		
	}
	
	public void deleteEmployee(int empid) {
		edao.deleteById(empid);
		
		
//		Employee i1 = edao.findById(empid).orElse(null);
//		if(i1 != null) {
//			edao.delete(i1);
//			return "Item Deleeted";
//		}
//		else
//		{
//			return "Not available";
//		}
//	
	}
	public Employee updateEmployee(Employee e) {
		return edao.save(e);
		
//		Employee e1=edao.findById(e.getEmpId()).orElse(null);
//		if(e1 !=null) {
//			e1.setEmpName(e.getEmpName());
//			e1.setEmpDept(e.getEmpDept());
//			e1.setMailId(e.getMailId());
//			 edao.save(e1);
//			 return "Employee got updated";
//		}
//		else {
//			return "Enter correct Employee Id";
//		}
		
		
	}
	
}


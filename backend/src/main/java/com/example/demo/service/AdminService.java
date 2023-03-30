package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.AdminDao;
import com.example.demo.model.Admin;

@Service
public class AdminService {
		@Autowired
		private AdminDao adao;
		
		
		
//		public boolean adminLogin(Admin admin) {
//			
//			if(adao.getByEmail(admin.getEmail())) {
//				if(adao.getByPassword(admin.getPassword())) {
//					return true;
//				}
//				return false;
//			}
//			
//			
//			return false;
//		}
		
//		public Admin adminlogin(Admin admin) {
//			Admin a1=adao.getByEmail(admin.getEmail());
//			if(a1.getPassword()==admin.getPassword()) {
//				return a1;
//			}
//			
//			
//		}
		
}

		
		


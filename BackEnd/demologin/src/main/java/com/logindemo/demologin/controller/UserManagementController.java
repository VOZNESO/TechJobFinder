package com.logindemo.demologin.controller;

import com.logindemo.demologin.dto.Reqres;
import com.logindemo.demologin.entity.OurUsers;
import com.logindemo.demologin.service.UserManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserManagementController {
    @Autowired
    private UserManagementService userManagementService;

    @PostMapping("/auth/register")
    public ResponseEntity<Reqres> register(@RequestBody Reqres reqres){
        return ResponseEntity.ok(userManagementService.register(reqres));
    }

    @PostMapping("/auth/login")
    public ResponseEntity<Reqres>  login(@RequestBody Reqres reqres){
        return ResponseEntity.ok(userManagementService.login(reqres));
    }

    @PostMapping("/auth/refresh")
    public ResponseEntity<Reqres>  refreshToken(@RequestBody Reqres reqres){
        return ResponseEntity.ok(userManagementService.refreshToken(reqres));
    }

    @GetMapping("/admin/get-all-users")
    public ResponseEntity<Reqres>  getAllUser(){
        return ResponseEntity.ok(userManagementService.getAllUsers());
    }

    @GetMapping("/admin/get-user/{userId}")
    public ResponseEntity<Reqres>  getUserById(@PathVariable Integer userId){
        return ResponseEntity.ok(userManagementService.getUserById(userId));
    }

    @PutMapping("/admin/update/{userId}")
    public ResponseEntity<Reqres>  updateUser(@PathVariable Integer userId, @RequestBody OurUsers reqres){
        return ResponseEntity.ok(userManagementService.updateUser(userId, reqres));
    }

    @GetMapping("/adminuser/get-profile")
    public ResponseEntity<Reqres>  getMyProfile(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Reqres resp = userManagementService.getMyInfo(email);
        return ResponseEntity.status(resp.getStatusCode()).body(resp);
    }
    @DeleteMapping("/admin/delete/{userId}")
    public ResponseEntity<Reqres> deleteUser(@PathVariable Integer userId){
        return ResponseEntity.ok(userManagementService.deleteUser(userId));
    }

}

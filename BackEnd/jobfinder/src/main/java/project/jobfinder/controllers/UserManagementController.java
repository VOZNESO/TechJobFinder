package project.jobfinder.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import project.jobfinder.dtos.UsersDTO;
import project.jobfinder.entities.OurUsers;
import project.jobfinder.services.UserManagementService;

@Controller
public class UserManagementController {
    private final UserManagementService userManagementService;

    public UserManagementController(UserManagementService userManagementService) {
        this.userManagementService = userManagementService;
    }

    @PostMapping("/auth/register")
    public ResponseEntity<UsersDTO> register(@RequestBody UsersDTO reqres){
        return ResponseEntity.ok(userManagementService.register(reqres));
    }

    @PostMapping("/auth/login")
    public ResponseEntity<UsersDTO>  login(@RequestBody UsersDTO reqres){
        return ResponseEntity.ok(userManagementService.login(reqres));
    }

    @PostMapping("/auth/refresh")
    public ResponseEntity<UsersDTO>  refreshToken(@RequestBody UsersDTO reqres){
        return ResponseEntity.ok(userManagementService.refreshToken(reqres));
    }

    @GetMapping("/admin/get-all-users")
    public ResponseEntity<UsersDTO>  getAllUser(){
        return ResponseEntity.ok(userManagementService.getAllUsers());
    }

    @GetMapping("/admin/get-user/{userId}")
    public ResponseEntity<UsersDTO>  getUserById(@PathVariable Long userId){
        return ResponseEntity.ok(userManagementService.getUserById(userId));
    }

    @PutMapping("/admin/update/{userId}")
    public ResponseEntity<UsersDTO>  updateUser(@PathVariable Long userId, @RequestBody OurUsers reqres){
        return ResponseEntity.ok(userManagementService.updateUser(userId, reqres));
    }

    @GetMapping("/adminuser/get-profile")
    public ResponseEntity<UsersDTO>  getMyProfile(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        UsersDTO resp = userManagementService.getMyInfo(username);
        return ResponseEntity.status(resp.getStatusCode()).body(resp);
    }

    @DeleteMapping("/admin/delete/{userId}")
    public ResponseEntity<UsersDTO> deleteUser(@PathVariable Long userId){
        return ResponseEntity.ok(userManagementService.deleteUser(userId));
    }

}

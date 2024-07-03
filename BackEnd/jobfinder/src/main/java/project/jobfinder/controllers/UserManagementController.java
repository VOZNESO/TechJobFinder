package project.jobfinder.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project.jobfinder.dtos.UsersDTO;
import project.jobfinder.entities.OurUsers;
import project.jobfinder.services.UserManagementService;

@Controller
public class UserManagementController {
    private final UserManagementService userManagementService;

    public UserManagementController(UserManagementService userManagementService) {
        this.userManagementService = userManagementService;
    }

    @PostMapping(value = "/auth/register", consumes = {"multipart/form-data"})
    public ResponseEntity<UsersDTO> register(@RequestParam("username") String username,
                                             @RequestParam("password") String password,
                                             @RequestParam("email") String email,
                                             @RequestParam("firstName") String firstName,
                                             @RequestParam("lastName") String lastName,
                                             @RequestParam("phone") String phone,
                                             @RequestParam("address") String address,
                                             @RequestParam("bio") String bio,
                                             @RequestParam("dateOfBirth") String dateOfBirth,
                                             @RequestParam("role") String role,
                                             @RequestParam("avatar") MultipartFile avatar) {
        UsersDTO reqres = new UsersDTO();
        reqres.setUsername(username);
        reqres.setPassword(password);
        reqres.setEmail(email);
        reqres.setFirstName(firstName);
        reqres.setLastName(lastName);
        reqres.setPhone(phone);
        reqres.setAddress(address);
        reqres.setBio(bio);
        reqres.setDateOfBirth(dateOfBirth);
        reqres.setRole(role);
        reqres.setAvatarUrl(avatar); // Bind file ảnh vào DTO

        return ResponseEntity.ok(userManagementService.register(reqres));
    }

    @PostMapping(value = "/admin/create-user", consumes = {"multipart/form-data"})
    public ResponseEntity<UsersDTO> createUser(@RequestParam("username") String username,
                                             @RequestParam("password") String password,
                                             @RequestParam("email") String email,
                                             @RequestParam("firstName") String firstName,
                                             @RequestParam("lastName") String lastName,
                                             @RequestParam("phone") String phone,
                                             @RequestParam("address") String address,
                                             @RequestParam("bio") String bio,
                                             @RequestParam("dateOfBirth") String dateOfBirth,
                                             @RequestParam("role") String role,
                                             @RequestParam("avatar") MultipartFile avatar) {
        UsersDTO reqres = new UsersDTO();
        reqres.setUsername(username);
        reqres.setPassword(password);
        reqres.setEmail(email);
        reqres.setFirstName(firstName);
        reqres.setLastName(lastName);
        reqres.setPhone(phone);
        reqres.setAddress(address);
        reqres.setBio(bio);
        reqres.setDateOfBirth(dateOfBirth);
        reqres.setRole(role);
        reqres.setAvatarUrl(avatar);
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

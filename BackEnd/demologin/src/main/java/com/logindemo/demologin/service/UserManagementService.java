package com.logindemo.demologin.service;

import com.logindemo.demologin.dto.Reqres;
import com.logindemo.demologin.entity.OurUsers;
import com.logindemo.demologin.repository.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class UserManagementService {
    @Autowired
    private UsersRepo usersRepo;
    @Autowired
    private JWTUltils jwtUltils;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public Reqres register(Reqres registrationRequest){
        Reqres resp = new Reqres();
        try{
            OurUsers ourUsers = new OurUsers();
            ourUsers.setEmail(registrationRequest.getEmail());
            ourUsers.setCity(registrationRequest.getCity());
            ourUsers.setRole(registrationRequest.getRole());
            ourUsers.setName(registrationRequest.getName());
            ourUsers.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
            OurUsers ourUsersResult = usersRepo.save(ourUsers);
            if(ourUsersResult.getId()>0){
                resp.setOurUsers(ourUsersResult);
                resp.setMessage("User Save Successfully");
                resp.setStatusCode(200);
            }
        }catch (Exception e){
            resp.setStatusCode(500);
            resp.setError(e.getMessage());
        }
        return resp;
    }

    public Reqres login(Reqres loginRequest){
        Reqres resp = new Reqres();
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
            var user = usersRepo.findByEmail(loginRequest.getEmail()).orElseThrow();
            var jwt = jwtUltils.generateToken(user);
            var refreshToken = jwtUltils.generateRefreshToken(new HashMap<>(), user);
            resp.setStatusCode(200);
            resp.setToken(jwt);
            
            resp.setRole(user.getRole());
            resp.setRefreshToken(refreshToken);
            resp.setExpirationTime("24Hrs");
            resp.setMessage("Login Successfully");
            resp.getOurUsers();
        }catch (Exception e){
            resp.setStatusCode(500);
            resp.setError("Invalid Username or Password");
        }
        return resp;
    }

    public Reqres refreshToken(Reqres refreshTokenRequest){
        Reqres resp = new Reqres();
        try{
            String ourEmail = jwtUltils.extractUsername(refreshTokenRequest.getToken());
            OurUsers ourUsers = usersRepo.findByEmail(ourEmail).orElseThrow();
            if(jwtUltils.isTokenValid(refreshTokenRequest.getToken(), ourUsers)){
                var jwt = jwtUltils.generateToken(ourUsers);
                resp.setStatusCode(200);
                resp.setToken(jwt);
                resp.setRefreshToken(refreshTokenRequest.getToken());
                resp.setExpirationTime("24Hrs");
                resp.setMessage("Successfully Refresh Token");
            }
            resp.setStatusCode(200);
            return resp;
        }catch (Exception e){
            resp.setStatusCode(500);
            resp.setMessage(e.getMessage());
            return resp;
        }
    }

    public Reqres getAllUsers(){
        Reqres resp  = new Reqres();
        try{
            List<OurUsers> result = usersRepo.findAll();
            if(!result.isEmpty()){
                resp.setOurUsersList(result);
                resp.setStatusCode(200);
                resp.setMessage("Get All Users Successfully");
            }else {
                resp.setStatusCode(404);
                resp.setMessage("No User Found");
            }
            return resp;
        }catch (Exception e){
            resp.setStatusCode(500);
            resp.setError("Error Occurred: "+ e.getMessage());
            return resp;
        }
    }

    public Reqres getUserById(Integer id) {
        Reqres resp = new Reqres();
        try {
            OurUsers userById = usersRepo.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
            resp.setOurUsers(userById);
            resp.setStatusCode(200);
            resp.setMessage("User Found Successfully");
        } catch (Exception e) {
            resp.setStatusCode(500);
            resp.setError("Error Occurred: " + e.getMessage());
        }
        return resp;
    }

    public Reqres deleteUser(Integer userId){
        Reqres resp = new Reqres();
        try{
            Optional<OurUsers> userOptional = usersRepo.findById(userId);
            if(userOptional.isPresent()){
                usersRepo.deleteById(userId);
                resp.setStatusCode(200);
                resp.setMessage("Delete User     Successfully");
            }else {
                resp.setStatusCode(404);
                resp.setMessage("User Not Found For Deletion");
            }
        }catch (Exception e) {
            resp.setStatusCode(500);
            resp.setError("Error Occurred While Deleting User: " + e.getMessage());
        }
        return resp;
    }

    public Reqres updateUser(Integer userId, OurUsers updatedUser){
        Reqres resp = new Reqres();
        try{
            Optional<OurUsers> userOptional = usersRepo.findById(userId);
            if(userOptional.isPresent()){
                OurUsers existingUser = userOptional.get();
                existingUser.setEmail(updatedUser.getEmail());
                existingUser.setName(updatedUser.getName());
                existingUser.setCity(updatedUser.getCity());
                existingUser.setRole(updatedUser.getRole());
                if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()){
                    existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
                }
                OurUsers savedUser = usersRepo.save(existingUser);
                resp.setOurUsers(savedUser);
                resp.setStatusCode(200);
                resp.setMessage("Updated User Successfully");
            }else {
                resp.setStatusCode(404);
                resp.setMessage("User Not Found For Update");
            }
        }catch (Exception e) {
            resp.setStatusCode(500);
            resp.setError("Error Occurred While Updating User: " + e.getMessage());

        }return resp;
    }

    public Reqres getMyInfo(String email){
        Reqres resp = new Reqres();
        try{
            Optional<OurUsers> userOptional = usersRepo.findByEmail(email);
            if(userOptional.isPresent()){
                resp.setOurUsers(userOptional.get());
                resp.setStatusCode(200);
                resp.setMessage("Get Info User Successfully");
            }else {
                resp.setStatusCode(404);
                resp.setMessage("User Not Found");
            }
        }catch (Exception e) {
            resp.setStatusCode(500);
            resp.setError("Error Occurred While Getting Info User: " + e.getMessage());

        }return resp;
    }

}

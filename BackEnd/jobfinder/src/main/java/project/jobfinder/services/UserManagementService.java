package project.jobfinder.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import project.jobfinder.dtos.UsersDTO;
import project.jobfinder.entities.OurUsers;
import project.jobfinder.repository.UsersRepository;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class UserManagementService {
    private UsersRepository usersRepository;
    private JWTUtils jwtUtils;
    private AuthenticationManager authenticationManager;
    private PasswordEncoder passwordEncoder;

    public UserManagementService(UsersRepository usersRepository, JWTUtils jwtUtils, AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder) {
        this.usersRepository = usersRepository;
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }

    public UsersDTO register(UsersDTO registrationRequest){
        UsersDTO usersDTO = new UsersDTO();
        try{
            OurUsers ourUsers = new OurUsers();
            ourUsers.setUsername(registrationRequest.getUsername());
            ourUsers.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
            ourUsers.setEmail(registrationRequest.getEmail());
            ourUsers.setFirstName(registrationRequest.getFirstName());
            ourUsers.setLastName(registrationRequest.getLastName());
            ourUsers.setPhone(registrationRequest.getPhone());
            ourUsers.setAddress(registrationRequest.getAddress());
            ourUsers.setBio(registrationRequest.getBio());
            ourUsers.setDateOfBirth(registrationRequest.getDateOfBirth());
            ourUsers.setRole(registrationRequest.getRole());
            ourUsers.setAvatar(registrationRequest.getAvatar());
            ourUsers.setCreatedAt(LocalDateTime.now());
            ourUsers.setUpdatedAt(LocalDateTime.now());

            OurUsers ourUsersResult = usersRepository.save(ourUsers);
            if(ourUsersResult.getId() > 0){
                usersDTO.setOurUsers(ourUsersResult);
                usersDTO.setMessage("User Save Successfully");
                usersDTO.setStatusCode(200);
            }
        } catch (Exception e){
            usersDTO.setStatusCode(500);
            usersDTO.setError(e.getMessage());
        }
        return usersDTO;
    }

    public UsersDTO login(UsersDTO loginRequest){
        UsersDTO usersDTO = new UsersDTO();
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
            var user = usersRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
            var jwt = jwtUtils.generateToken(user);
            var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), user);
            usersDTO.setStatusCode(200);
            usersDTO.setToken(jwt);
            usersDTO.setRole(user.getRole());
            usersDTO.setRefreshToken(refreshToken);
            usersDTO.setExpirationTime("24Hrs");
            usersDTO.setMessage("Login Successfully");
            usersDTO.getOurUsers();
        }catch (Exception e){
            usersDTO.setStatusCode(500);
            usersDTO.setError("Invalid Username or Password");
        }
        return usersDTO;
    }

    public UsersDTO refreshToken(UsersDTO refreshTokenRequest){
        UsersDTO usersDTO = new UsersDTO();
        try{
            String ourEmail = jwtUtils.extractUsername(refreshTokenRequest.getToken());
            OurUsers ourUsers = usersRepository.findByEmail(ourEmail).orElseThrow();
            if(jwtUtils.isTokenValid(refreshTokenRequest.getToken(), ourUsers)){
                var jwt = jwtUtils.generateToken(ourUsers);
                usersDTO.setStatusCode(200);
                usersDTO.setToken(jwt);
                usersDTO.setRefreshToken(refreshTokenRequest.getToken());
                usersDTO.setExpirationTime("24Hrs");
                usersDTO.setMessage("Successfully Refresh Token");
            }
        }catch (Exception e){
            usersDTO.setStatusCode(500);
            usersDTO.setMessage(e.getMessage());
        }
        return usersDTO;
    }

    public UsersDTO getAllUsers(){
        UsersDTO usersDTO = new UsersDTO();
        try{
            List<OurUsers> result = usersRepository.findAll();
            if(!result.isEmpty()){
                usersDTO.setOurUsersList(result);
                usersDTO.setStatusCode(200);
                usersDTO.setMessage("Get All Users Successfully");
            }else {
                usersDTO.setStatusCode(404);
                usersDTO.setMessage("User Not Found");
            }
            return usersDTO;
        }catch (Exception e){
            usersDTO.setStatusCode(500);
            usersDTO.setError(e.getMessage());
            return usersDTO;
        }
    }

    public UsersDTO getUserById(Long id){
        UsersDTO usersDTO = new UsersDTO();
        try{
            OurUsers userId = usersRepository.findById(id).orElseThrow();
            usersDTO.setOurUsers(userId);
            usersDTO.setStatusCode(200);
            usersDTO.setMessage("User Found Successfully");
        }catch (Exception e){
            usersDTO.setStatusCode(500);
            usersDTO.setMessage(e.getMessage());
        }
        return usersDTO;
    }

    public UsersDTO deleteUser(Long id){
        UsersDTO usersDTO = new UsersDTO();
        try{
            Optional<OurUsers> usersOptional = usersRepository.findById(id);
            if(usersOptional.isPresent()){
                usersRepository.deleteById(id);
                usersDTO.setStatusCode(200);
                usersDTO.setMessage("Delete User Successfully");
            }else {
                usersDTO.setStatusCode(404);
                usersDTO.setMessage("User Not Found For Deletion");
            }
        }catch (Exception e){
            usersDTO.setStatusCode(500);
            usersDTO.setMessage("Error Occurred While Deleting User: "+e.getMessage());
        }
        return usersDTO;
    }

    public UsersDTO updateUser(Long id, OurUsers updatedUser){
        UsersDTO usersDTO = new UsersDTO();
        try{
            Optional<OurUsers> userOptional = usersRepository.findById(id);
            if(userOptional.isPresent()){
                OurUsers existingUser = userOptional.get();

                existingUser.setUsername(updatedUser.getUsername());
                existingUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
                existingUser.setEmail(updatedUser.getEmail());
                existingUser.setFirstName(updatedUser.getFirstName());
                existingUser.setLastName(updatedUser.getLastName());
                existingUser.setPhone(updatedUser.getPhone());
                existingUser.setAddress(updatedUser.getAddress());
                existingUser.setBio(updatedUser.getBio());
                existingUser.setDateOfBirth(updatedUser.getDateOfBirth());
                existingUser.setRole(updatedUser.getRole());
                existingUser.setAvatar(updatedUser.getAvatar());
                existingUser.setUpdatedAt(LocalDateTime.now());

                OurUsers savedUser = usersRepository.save(existingUser);
                usersDTO.setOurUsers(savedUser);
                usersDTO.setStatusCode(200);
                usersDTO.setMessage("Updated User Successfully");
            } else {
                usersDTO.setStatusCode(404);
                usersDTO.setMessage("User Not Found For Update");
            }
        } catch (Exception e){
            usersDTO.setStatusCode(500);
            usersDTO.setError("Error Occurred While Updating User: " + e.getMessage());
        }
        return usersDTO;
    }

    public  UsersDTO getMyInfo(String email) {
        UsersDTO usersDTO = new UsersDTO();
        try {
            Optional<OurUsers> usersOptional = usersRepository.findByEmail(email);
            if (usersOptional.isPresent()) {
                usersDTO.setOurUsers(usersOptional.get());
                usersDTO.setStatusCode(200);
                usersDTO.setMessage("Get Info User Successfully");
            } else {
                usersDTO.setStatusCode(404);
                usersDTO.setMessage("User Not Found");
            }
        } catch (Exception e) {
            usersDTO.setStatusCode(500);
            usersDTO.setMessage("Error Occurred While Getting Info User: " + e.getMessage());
        }
        return usersDTO;
    }
}

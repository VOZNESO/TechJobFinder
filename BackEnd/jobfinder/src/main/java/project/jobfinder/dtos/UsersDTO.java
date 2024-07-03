package project.jobfinder.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;
import project.jobfinder.entities.OurUsers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class UsersDTO {
    private Long id;
    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private String address;
    private String bio;
    @DateTimeFormat(pattern = "yyyy-MM-dd") // Định dạng ngày tháng để Spring chuyển đổi
    private String dateOfBirth;
    private String role;
    private MultipartFile avatarUrl;
    private String token;
    private String refreshToken;
    private String expirationTime;
    private int statusCode;
    private String message;
    private String error;
    private OurUsers ourUsers;
    private List<OurUsers> ourUsersList;
}

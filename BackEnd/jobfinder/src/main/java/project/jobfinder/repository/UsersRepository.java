package project.jobfinder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.jobfinder.entities.OurUsers;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<OurUsers, Long> {
    Optional<OurUsers> findByUsername(String username);
    Optional<OurUsers> findByEmail(String email);
}

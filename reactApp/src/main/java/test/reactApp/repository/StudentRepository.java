package test.reactApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import test.reactApp.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}

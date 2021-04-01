package test.reactApp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import test.reactApp.command.CreateStudentCommand;
import test.reactApp.exception.ResourceNotFoundException;
import test.reactApp.model.Student;
import test.reactApp.repository.StudentRepository;

@Service
public class StudentService {

	private StudentRepository studentRepository;

	@Autowired
	public StudentService(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}

	public List<Student> getAllStudents() {
		return studentRepository.findAll();

	}

	public void createStudent(CreateStudentCommand createdStudent) {
		Student student = new Student();
		student.setFirstName(createdStudent.getFirstName());
		student.setLastName(createdStudent.getLastName());
		student.setEmail(createdStudent.getEmail());
		studentRepository.save(student);

	}

	public ResponseEntity<Student> getStudentsById(Long id) {
		Student student = studentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student with id: " + id + " does not exist."));
		return ResponseEntity.ok(student);
	}

	public ResponseEntity<Student> updateStudents(Long id, Student studentForUpdate) {
		Student student = studentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student with id: " + id + " does not exist."));
		student.setFirstName(studentForUpdate.getFirstName());
		student.setLastName(studentForUpdate.getLastName());
		student.setEmail(studentForUpdate.getEmail());

		Student updatedStudent = studentRepository.save(student);
		return ResponseEntity.ok(updatedStudent);
	}

	public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable("id") Long id) {
		Student student = studentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Student with id: " + id + " does not exist."));
		studentRepository.delete(student);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}
}

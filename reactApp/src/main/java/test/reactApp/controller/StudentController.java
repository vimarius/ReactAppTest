package test.reactApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import test.reactApp.command.CreateStudentCommand;
import test.reactApp.model.Student;
import test.reactApp.service.StudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {

	private StudentService studentService;

	@Autowired
	public StudentController(StudentService studentService) {
		this.studentService = studentService;
	}

	@GetMapping("/students")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}

	@PostMapping("/students")
	public void createStudent(@RequestBody CreateStudentCommand student) {
		studentService.createStudent(student);
	}

	@GetMapping("/students/{id}")
	public ResponseEntity<Student> getStudentsById(@PathVariable("id") Long id) {
		return studentService.getStudentsById(id);
	}
}

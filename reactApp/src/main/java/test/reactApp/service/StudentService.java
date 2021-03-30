package test.reactApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.reactApp.command.CreateStudentCommand;
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

}

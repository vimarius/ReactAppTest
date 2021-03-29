package test.reactApp.command;

public class CreateStudentCommand {

	private String firstName;
	private String lastName;
	private String email;

	public CreateStudentCommand() {
		// TODO Auto-generated constructor stub
	}

	public CreateStudentCommand(String firstName, String lastName, String email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "CreateStudentCommand [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + "]";
	}

}

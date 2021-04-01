import React from 'react';
import StudentService from '../services/StudentService';


class StudentListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        };

        this.addStudent=this.addStudent.bind(this);
        this.editStudent=this.editStudent.bind(this);
        this.deleteStudent= this.deleteStudent.bind(this);
    }

    editStudent(id) {
        this.props.history.push(`/update-student/${id}`);
    }

    deleteStudent(id) {
        StudentService.deleteStudent(id).then((res) => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({students: res.data});
        });
    }

    addStudent() {
this.props.history.push('/add-student');
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Student List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                </div>
                <div className="row">

                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                this.state.students.map(
                                    student =>
                                    <tr key={student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <button onClick={() => this.editStudent(student.id)} className="btn btn-info">Update</button>
                                            <button style ={{marginLeft:"10px"}}onClick={() => this.deleteStudent(student.id)} className="btn btn-danger">Delete</button>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                
                </div>
            </div>
        );
    }
}



export default StudentListComponent;

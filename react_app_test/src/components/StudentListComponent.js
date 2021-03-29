import React from 'react';


class StudentListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
        };
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Student List</h2>
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

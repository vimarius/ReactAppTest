import React from 'react';
import StudentService from '../services/StudentService';

class ViewStudentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            student: {}
        };
    }

    componentDidMount() {
        StudentService.getStudentById(this.state.id).then((res) => {
            this.setState({student: res.data});
        })
    }

    cancel() {
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
                <div>
                    <br></br>
                    <div className=" card col-md-6 offset-md-3">
                        <h2 className="text-center">View Student Details</h2>
                        <div className="card-body">
                            <div className="row">
                                <label className="col-md-6 ">Student's name: </label>
                                <div className="col-md-6">  {this.state.student.firstName}</div>
                            </div>
                            <div className="row">
                                <label className="col-md-6">Student's last name: </label>
                                <div className="col-md-6"> {this.state.student.lastName}</div>
                            </div>
                            <div className="row">
                                <label className="col-md-6">Student's email:</label>
                                <div className="col-md-6"> {this.state.student.email}</div>
                            </div>
                                                  
                            
                            
                        </div>
                        <div className="text-center">
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Go Back</button>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        );
    }
}


export default ViewStudentComponent;

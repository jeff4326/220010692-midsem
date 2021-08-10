import React, { Component } from 'react'
import {Card, Form, Button} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSavem, faPlusSquare, faUndo} from "@fortawesome/free-solid-svg-icons";
import {faSave} from "@fortawesome/free-solid-svg-icons/faSave";
import axios from "axios";
import MyToast from "./MyToast";

export default class Project extends Component{
    constructor(props) {
        super(props);
        this.state= this.initialState;
        this.projectChange = this.projectChange.bind(this);
        this.submitProject = this.submitProject.bind(this);
    }
    initialState ={
        title:'',
        cost:'',
        location:'',
        projectNum:'',
        projectMan:''
    }
    resetProject = () => {
        this.setState(() => this.initialState);
    }
    submitProject = event =>{
        event.preventDefault();
        const project = {
            title:this.state.title,
            cost: this.state.cost,
            location: this.state.location,
            projectNum: this.state.projectNum,
            projectMan: this.state.projectMan,
        };

        axios.post("http://localhost:8080/api/v1/project",project)
            .then(response => {
               if(response.data !=null){
                   this.setState({"show": true});
                   setTimeout(() => this.setState({"show":false}), 3000);
               }else{
                   this.setState({"show": false});
               }
            });
        this.setState(this.initialState);
    }
    projectChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render() {
        const {title,cost,location,projectNum,projectMan} = this.state;
        return (
            <div>
                <div style={{"display":this.state.show ? "block":"none"}}>
                    <MyToast children={{show: this.state.show, message:"Project saved successfully"}}/>
                </div>
              <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Project List</Card.Header>
                <Form onReset={this.resetProject} onSubmit={this.submitProject} id="projectFormId">
                    <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        value={title}
                                        onChange={this.ProjectChange}
                                        type="test"
                                        name="title"
                                        className={"bg-dark text-white"}
                                        placeholder="Project Title"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCost">
                                    <Form.Label>Cost</Form.Label>
                                    <Form.Control
                                        required
                                        autoComplete="off"
                                        type="test"
                                        name="cost"
                                        value={cost}
                                        onChange={this.projectChange}
                                        className={"bg-dark text-white"}
                                        placeholder="Project Cost" />
                                </Form.Group>
                            </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    required
                                    autoComplete="off"
                                    type="test"
                                    name="location"
                                    value={location}
                                    onChange={this.projectChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Location" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Project Number</Form.Label>
                                <Form.Control
                                    required
                                    autoComplete="off"
                                    type="test"
                                    name="projectNum"
                                    value={projectNum}
                                    onChange={this.projectChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Project Number" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Project Manager</Form.Label>
                                <Form.Control
                                    required
                                    autoComplete="off"
                                    value={projectMan}
                                    onChange={this.projectChange}
                                    type="test" name="project Manager"
                                    className={"bg-dark text-white"}
                                    placeholder="Project Manager" />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                   <Card.Footer style={{"textAlign": "right"}}>
                    <Button size ="sm" variant="success" type="submit">
                        <FontAwesomeIcon icon={faSave} /> Submit
                    </Button>{' '}
                       <Button size ="sm" variant="primary" type="reset">
                           <FontAwesomeIcon icon={faUndo} /> Reset
                       </Button>
                   </Card.Footer>
                </Form>
            </Card>
            </div>
        );
    }
}
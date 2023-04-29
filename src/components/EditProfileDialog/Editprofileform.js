import React, { Component } from "react";
import { Form } from "react-bootstrap";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
import Button from "react-bootstrap/Button";

export class Editprofileform extends Component {
  state = {
    actual_name: "",
    age: null,
    gender: "",
    dob: "",
    user_image: null,
    user_foreign: localStorage.getItem("userid"),
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      user_image: e.target.files[0],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append(
      "user_image",
      this.state.user_image,
      this.state.user_image.name
    );
    form_data.append("actual_name", this.state.actual_name);
    form_data.append("user_foreign", this.state.user_foreign);
    form_data.append("age", this.state.age);
    form_data.append("gender", this.state.gender);
    form_data.append("dob", this.state.dob);
    let url = `${baseUrl}/user-detail/`;
    axiosInstance
      .post(url, form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <h5>Name</h5>
          <Form.Control
            type="text"
            placeholder="Name *"
            name="actual_name"
            id="actual_name"
            value={this.state.actual_name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <h5>Profile photo</h5>
          <Form.Control
            type="file"
            placeholder="pic"
            name="image"
            id="user_image"
            accept=".jpg, .jpeg, .png"
            onChange={this.handleImageChange}
          />
        </Form.Group>
        <br />

        {/* <Form.Group>
       <h5>Phone number</h5>
        <Form.Control
            type="text"
            placeholder="phone number"
            name="phno"
            value={this.state.phno}
            id="phno"
            onChange = { this.handleChange }
        
        />
    </Form.Group><br/> */}
        <Form.Group>
          <h5>Age</h5>
          <Form.Control
            type="number"
            placeholder="age"
            name="age"
            value={this.state.age}
            id="age"
            onChange={this.handleChange}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <h5>Gender</h5>
          <Form.Control
            type="text"
            placeholder="gender"
            name="gender"
            value={this.state.gender}
            id="gender"
            onChange={this.handleChange}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <h5>DOB</h5>
          <Form.Control
            type="date"
            placeholder="dob"
            name="dob"
            value={this.state.dob}
            id="dob"
            onChange={this.handleChange}
          />
        </Form.Group>
        <br />

        <Button
          onClick={this.handleSubmit}
          variant="success"
          type="submit"
          block
        >
          Save Changes
        </Button>
      </Form>
    );
  }
}

export default Editprofileform;

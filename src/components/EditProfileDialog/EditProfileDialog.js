import React, { Component } from "react";
import './Edit.css'
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
import Button from "react-bootstrap/Button";
import { Dialog } from "@mui/material";
export class EditProfileDialog extends Component {
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
      <Dialog
        style={{ padding: 0, borderRadius: 10 }}
        fullWidth={true}
        maxWidth={"md"}
        PaperProps={{
          sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "70vh" },
        }}
        open={this.props.open}
        keepMounted
        onClose={this.props.handleClose}
        disableScrollLock
        aria-describedby="alert-dialog-slide-description"
      >
        <form className="edit_prof_form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name *"
            name="actual_name"
            id="actual_name"
            value={this.state.actual_name}
            onChange={this.handleChange}
          />
          <input
            type="file"
            placeholder="pic"
            name="image"
            id="user_image"
            accept=".jpg, .jpeg, .png"
            onChange={this.handleImageChange}
          />
          <input
            type="number"
            placeholder="age"
            name="age"
            value={this.state.age}
            id="age"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="gender"
            name="gender"
            value={this.state.gender}
            id="gender"
            onChange={this.handleChange}
          />
          <input
            type="date"
            placeholder="dob"
            name="dob"
            value={this.state.dob}
            id="dob"
            onChange={this.handleChange}
          />
          <Button
            onClick={this.handleSubmit}
            variant="success"
            type="submit"
            block
          >
            Save Changes
          </Button>
        </form>
      </Dialog>
    );
  }
}

export default EditProfileDialog;

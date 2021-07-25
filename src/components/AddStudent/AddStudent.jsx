import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addStudent } from "../../redux/actions/studentActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    boxShadow: "none",
  },
  formArea: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300,
    },
    display: "flex",
    flexDirection: "column",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    color: "red",
  },
  pos: {
    marginBottom: 12,
  },
}));

function AddStudent() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [requiredError, setRequiredError] = useState(false);
  const [rollnoError, setRollnoError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);

  const handleSubmit = (e) => e.preventDefault();

  const handleAdd = () => {
    if (!name || !rollno || !address || !email || !contact) {
      setRequiredError(true);
      return false;
    } else {
      setRequiredError(false);
    }

    let isFormValid = true;

    //   regex
    if (!name.match(/^[A-Za-z ]+$/)) {
      setNameError(true);
      isFormValid = false;
    } else {
      setNameError(false);
    }
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailError(true);
      isFormValid = false;
    } else {
      setEmailError(false);
    }
    if (!contact.match(/^[0-9]{10}$/)) {
      setContactError(true);
      isFormValid = false;
    } else {
      setContactError(false);
    }
    if (!rollno.match(/^[0-9]*$/)) {
      setRollnoError(true);
      isFormValid = false;
    } else {
      setRollnoError(false);
    }

    if (isFormValid) {
      console.log(nameError, contactError, emailError, rollnoError);

      if (!nameError && !contactError && !emailError && !rollnoError) {
        console.log("indise if");
        const studData = { rollno, name, address, contact, email };
        dispatch(addStudent(studData));
        history.push("/view-students");
      }
    }
  };

  console.log("rollnoerror...", rollnoError);

  return (
    <Card className={classes.root}>
      <h1>Add Student</h1>
      <CardContent>
        <form className={classes.formArea} noValidate onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Rollno"
            variant="outlined"
            type="text"
            onChange={(e) => setRollno(e.target.value)}
            helperText={rollnoError ? "Please enter only digits." : ""}
          />
          <TextField
            required
            id="outlined-disabled"
            label="Name"
            variant="outlined"
            type="text"
            onChange={(e) => setName(e.target.value)}
            helperText={nameError ? "Please enter only characters." : ""}
          />
          <TextField
            required
            id="outlined-multiline-static"
            label="Address"
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => setAddress(e.target.value)}
            helperText={addressError && "Please enter only characters."}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Contact Number"
            type="number"
            variant="outlined"
            onChange={(e) => setContact(e.target.value)}
            helperText={contactError && "Please enter 10 digits only."}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Email"
            type="email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            helperText={emailError && "Please enter valid email."}
          />

          {requiredError && (
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              All fields are compulsory.
            </Typography>
          )}
        </form>
      </CardContent>
      <CardActions>
        <Button variant="contained">Cancle</Button>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
}

export default AddStudent;

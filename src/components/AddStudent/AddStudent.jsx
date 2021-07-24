import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";

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
  },
  pos: {
    marginBottom: 12,
  },
}));

function AddStudent() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <h1>Add Student</h1>
      <CardContent>
        <form className={classes.formArea} noValidate autoComplete="off">
          <TextField
            required
            id="outlined-required"
            label="Rollno"
            variant="outlined"
            type="number"
          />
          <TextField
            required
            id="outlined-disabled"
            label="Name"
            variant="outlined"
            type="text"
          />
          <TextField
            id="outlined-multiline-static"
            label="Address"
            multiline
            rows={4}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-password-input"
            label="Contact Number"
            type="number"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-password-input"
            label="Email"
            type="email"
            variant="outlined"
          />
        </form>
      </CardContent>
      <CardActions>
        <Button variant="contained">Cancle</Button>
        <Button variant="contained" color="primary">
          Add
        </Button>
      </CardActions>
    </Card>
  );
}

export default AddStudent;

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

function EditDialog(props) {
  const classes = useStyles();
  const {
    open,
    handleClose,
    handleSubmit,
    handleInputChange,
    requiredError,
    editItemData,
  } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Student Details</DialogTitle>
        <DialogContent>
          <form className={classes.formArea} noValidate onSubmit={handleSubmit}>
            <TextField
              required
              name="rollno"
              id="outlined-required"
              label="Enter Rollno of Edit Item"
              placeholder="Rollno should be same as selected item"
              variant="outlined"
              type="text"
              value={editItemData.rollno}
              onChange={handleInputChange}
              //   helperText={rollnoError && "Please enter only digits."}
            />
            <TextField
              required
              name="name"
              id="outlined-disabled"
              label="Name"
              variant="outlined"
              type="text"
              onChange={handleInputChange}
              value={editItemData.name}
              //   helperText={nameError ? "Please enter only characters." : ""}
            />
            <TextField
              required
              name="address"
              id="outlined-multiline-static"
              label="Address"
              multiline
              rows={4}
              variant="outlined"
              onChange={handleInputChange}
              value={editItemData.address}
              //   helperText={addressError && "Please enter only characters."}
            />
            <TextField
              required
              name="contact"
              id="outlined-password-input"
              label="Contact Number"
              type="number"
              variant="outlined"
              onChange={handleInputChange}
              value={editItemData.contact}
              //   helperText={contactError && "Please enter 10 digits only."}
            />
            <TextField
              required
              name="email"
              id="outlined-password-input"
              label="Email"
              type="email"
              variant="outlined"
              onChange={handleInputChange}
              value={editItemData.email}
              //   helperText={emailError && "Please enter valid email."}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditDialog;

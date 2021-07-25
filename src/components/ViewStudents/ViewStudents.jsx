import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, editStudent } from "../../redux/actions/studentActions";
import EditDialog from "../EditDialog/EditDialog";

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    minWidth: 275,
  },
  mainClass: {
    display: "grid",
    gap: 15,
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,350px))",
    justifyContent: "center",
  },
  heading: {
    marginTop: 30,
    textAlign: "center",
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

  actionBtns: {
    cursor: "pointer",
  },
});

function ViewStudents() {
  const state = useSelector((state) => state);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const [editItemData, setEditItemData] = useState({
    rollno: "",
    name: "",
    address: "",
    contact: "",
    email: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setEditItemData({
      rollno: "",
      name: "",
      address: "",
      contact: "",
      email: "",
    });
    setOpen(false);
  };

  const handleSubmit = () => {
    //check for error
    if (
      !editItemData.name ||
      !editItemData.address ||
      !editItemData.email ||
      !editItemData.contact ||
      !editItemData.rollno
    ) {
      setError(true);
    } else {
      setError(false);

      dispatch(editStudent(editItemData));
      setOpen(false);
    }
  };
  const handleInputChange = (e) => {
    setEditItemData({
      ...editItemData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (rollno) => {
    dispatch(deleteStudent(rollno));
  };

  return (
    <>
      <div className={classes.heading}>
        <h1>View Students</h1>
      </div>
      <div className={classes.mainClass}>
        {state &&
          state.students.map((item) => (
            <Card className={classes.root} key={item.rollno} variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Rollno: {item.rollno}
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Name: {item.name}
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Address: {item.address}
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Contact Number: {item.contact}
                </Typography>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Email: {item.email}
                </Typography>
              </CardContent>
              <CardActions className={classes.actionBtns}>
                <EditIcon style={{ color: "navy" }} onClick={handleOpen} />

                <EditDialog
                  open={open}
                  handleClose={handleClose}
                  handleSubmit={handleSubmit}
                  handleInputChange={handleInputChange}
                  editItemData={editItemData}
                  requiredError={error}
                />

                <DeleteIcon
                  style={{ color: "red", marginLeft: "20px" }}
                  onClick={() => handleDelete(item.rollno)}
                />
              </CardActions>
            </Card>
          ))}
      </div>
    </>
  );
}

export default ViewStudents;

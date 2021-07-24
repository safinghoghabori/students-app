import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

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
  const classes = useStyles();

  const handleEdit = () => {};

  const handleDelete = () => {};

  const data = [
    {
      rollno: "123123",
      name: "john",
      address: "102, street road, bhavnagar",
      mobno: "0099009900",
      emal: "xyz@gmail.com",
    },
    {
      rollno: "123123",
      name: "john",
      address: "102, street road, bhavnagar",
      mobno: "0099009900",
      emal: "xyz@gmail.com",
    },
    {
      rollno: "123123",
      name: "john",
      address: "102, street road, bhavnagar",
      mobno: "0099009900",
      emal: "xyz@gmail.com",
    },
    {
      rollno: "123123",
      name: "john",
      address: "102, street road, bhavnagar",
      mobno: "0099009900",
      emal: "xyz@gmail.com",
    },
    {
      rollno: "123123",
      name: "john",
      address: "102, street road, bhavnagar",
      mobno: "0099009900",
      emal: "xyz@gmail.com",
    },
  ];

  return (
    <>
      <div className={classes.heading}>
        <h1>View Students</h1>
      </div>
      <div className={classes.mainClass}>
        {data &&
          data.map((item) => (
            <Card className={classes.root} variant="outlined">
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
                  Contact Number: {item.mobno}
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
                <EditIcon style={{ color: "navy" }} onClick={handleEdit} />
                <DeleteIcon
                  style={{ color: "red", marginLeft: "20px" }}
                  onClick={handleDelete}
                />
              </CardActions>
            </Card>
          ))}
      </div>
    </>
  );
}

export default ViewStudents;

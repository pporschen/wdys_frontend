import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs as MuiBreadcrumbs, Link } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./CrumbsAction.css";
import "../../../global.css";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    textTransform: "uppercase",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "0.875rem",
    cursor: "pointer"
  },
  text: {
    color: "#333",
    textTransform: "uppercase",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 600,
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const Breadcrumbs = (props) => {
  const classes = useStyles();
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <MuiBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <div className={classes.text} key={name}>
            {name}
          </div>
        ) : (
          <Link
            key={name}
            onClick={() => history.push(routeTo)}
            color="inherit"
            className={classes.link}
            underline="none"
          >
            <div className={classes.link}>{name}</div>
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);

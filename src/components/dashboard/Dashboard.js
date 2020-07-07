import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Sidebar from "./sidebar/Sidebar";
import CrumbsAction from "./crumbsAction/CrumbsAction";
import ProjectDetailsPage from "./projectDetailsPage/ProjectsDetailsPage";
import TranslatorCreate from "./translatorCreate/TranslatorCreate";
import TranslatorDetails from "./translatorDetail/TranslatorDetails";
import Translator from "./translator/Translator";
import ProjectEdit from "./projectEdit/projectEdit";
import ProjectCreate from "./projectCreate/ProjectCreate";
import ProjectDetailsPageEdit from "./projectDetailsPageEdit/projectDetailsPageEdit";
import ProjectDetails from "./projectDetails/ProjectDetails";
import Projects from "./project/Projects";
import Translation from "./translation/Translation";
import Compare from "./compare/Compare";
import UserContext from "../../contexts/UserContext";
import Axios from "axios";

import "./Dashboard.css";

// Theme to control the width of the styling of the MUI componets found in components/dashboard/selectFields directory
const inputTheme320 = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        width: 320,
      },
    },
  },
});

const inputTheme500 = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        width: 500,
      },
    },
  },
});



const Dashboard = () => {

const { userId, setUserProjects, projectCounter, setProjectCounter } = useContext(UserContext);

 // API call to load the Projects section
  useEffect(() => {
    let url = `https://wdys.herokuapp.com/initial/${userId}`
    Axios
    .get(url, {headers: {'Content-Type':'application/json'}})
    .then((res) => { 
      setUserProjects(res.data.userprojects);
      setProjectCounter(res.data.userprojects.length)
    })
    .catch((err) => console.log(err))
  }, [userId, projectCounter, setUserProjects, setProjectCounter]);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-body">
        <CrumbsAction />
        <Switch>
          <Route
            exact
            path="/translators/create"
            render={(props) => (
              <ThemeProvider theme={inputTheme500}>
                <TranslatorCreate {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            exact
            path="/projects/create"
            render={(props) => (
              <ThemeProvider theme={inputTheme500}>
                <ProjectCreate {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            exact
            path="/projects/:projID/update"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <ProjectEdit {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            exact
            path="/projects/:projID/:basePageID/compare"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <Compare {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            path="/projects/:projID/:basePageID/update"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <ProjectDetailsPageEdit {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            path="/projects/:projID/:basePageID"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <ProjectDetailsPage {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            path="/translators/:translatorID"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <TranslatorDetails {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            path="/translators/:userID/:pageID"
            render={(props) => <Compare {...props} />}
          />

          <Route
            path="/projects/:projID"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <ProjectDetails {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            exact
            path="/translators"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <Translator {...props} />
              </ThemeProvider>
            )}
          />
          <Route
            exact
            path="/projects"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <Projects {...props} />
              </ThemeProvider>
            )}
          />
          <Route
            exact
            path="/translation"
            render={(props) => (
              <ThemeProvider theme={inputTheme320}>
                <Translation {...props} />
              </ThemeProvider>
            )}
          />

          <Route
            path="/translation/:pageID"
            render={(props) => <Compare {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

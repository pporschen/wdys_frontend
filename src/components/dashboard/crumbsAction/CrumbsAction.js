import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import "./CrumbsAction.css";

const CrumbsAction = () => {
  let matchProjectPage = useRouteMatch("/projects/:projID/:basePageID");
  let matchProjectDetails = useRouteMatch("/projects/:projID");
  let matchProjectUpdate = useRouteMatch("/projects/:projID/update");
  let matchTranslatorCreate = useRouteMatch("/translators/create");
  let matchProjectCreate = useRouteMatch("/projects/create");
  let matchTranslatorCompare = useRouteMatch("/translators/:userID/:pageID");
  let matchTranslator = useRouteMatch("/translators");
  let matchTranslatorDetails = useRouteMatch("/translators/:translatorID");
  let matchTranslationCompare = useRouteMatch("/translation/:pageID");
  let matchTranslation = useRouteMatch("/translation");
  let matchProjects = useRouteMatch("/projects");

  const handleAddButtonLink = () => {
    if (matchProjects) {
      return "/projects/create";
    } else if (matchTranslator) {
      return "/translators/create";
    }
  };

  return (
    <div className="body-head">
      {matchProjectCreate || matchTranslatorCreate || (matchTranslation && !matchTranslationCompare)? null : (
        <>
          <Breadcrumbs />
          <Link to={handleAddButtonLink} style={{ textDecoration: "none" }}>
            {matchProjectUpdate || matchProjectDetails || matchProjectPage || matchTranslatorDetails || matchTranslatorCompare ||matchTranslationCompare ? null : (
              <div className="add-button">+</div>
            )}
          </Link>
        </>
      )}
    </div>
  );
};

export default CrumbsAction;

import React from "react";
import { Visibility } from "@material-ui/icons";
import { Link } from 'react-router-dom'
import "../tables/Tables.css";
let uniqid = require('uniqid');


const AssignedPagesTR = ({ translatorDetails, assignedPages }) => {
  
  return (
    <>
    {assignedPages && assignedPages.length === 0 ? 
    <div className='no-table'>
      {`${translatorDetails.displayname} hasn't been assigned any pages yet, please assign pages in the project's page level`}
    </div> 
    : 
    <>
        <div className="project-pages-TM table-grid header">
          <div>Page Name</div>
          <div>Description</div>
          <div>View</div>
        </div>
        { assignedPages &&
        assignedPages.map((item) => 
        (
          <div className="table-grid project-pages-TM" key={uniqid()}>
            <div>{item.pagename}</div>
            <div>{item.description}</div>
            <div className="center">
            <Link to={`/translators/${item.translator_id}/${item._id}`} >
              {console.log(item)}
              <Visibility />
            </Link>
            </div>
          </div>
        )
        )
      }
      </>
    }
    </>
  );
};

export default AssignedPagesTR;

import React, { Fragment } from "react";
import PropTypes from "prop-types";

const MainNames = ({ names }) => (
  <Fragment>
    <span>
      <strong>{names}</strong>
    </span>
  </Fragment>
);

const ContentText = ({ content }) => (
  <Fragment>
      {Object.keys(content).map( (key)=> (
         <span key={key}>{content[key]}</span>
      ))}
  </Fragment>
);
MainNames.propTypes = {
  names: PropTypes.string.isRequired
};
ContentText.propTypes = {
  content: PropTypes.object.isRequired
};
export { MainNames, ContentText };

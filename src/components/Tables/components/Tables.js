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
    <span>{content}</span>
  </Fragment>
);
MainNames.propTypes = {
  names: PropTypes.string.isRequired
};
ContentText.propTypes = {
  content: PropTypes.string.isRequired
};
export { MainNames, ContentText };

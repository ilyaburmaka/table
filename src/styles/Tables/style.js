import styled from "styled-components";
import PropTypes from "prop-types";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.howRow}, 1fr);
  border-top: 1px solid black;
  border-right: 1px solid black;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.75rem;
  font-weight: 500;
  span {
    padding: 8px 15px;
    border: 1px solid rgba(224, 224, 224, 1);
  }
  span strong {
    display: table-cell;
    padding: 4px 0px 4px 3px;
    vertical-align: inherit;
  }
`;

Grid.propTypes = {
  howRow: PropTypes.number.isRequired
};
export { Grid };

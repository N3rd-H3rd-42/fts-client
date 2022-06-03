import React from "react";
import styled from "styled-components";

const STYLED_404_PAGE = styled.div`
  h1 {
    font-size: 72px;
    color: black;
  }
  
  h2 {
    font-size: 55px;
    color: black;
  }
  h3 {
    font-size: 48px;
    color: black;
  }
`;

const NOT_FOUND_404 = () => {
  return (
   <STYLED_404_PAGE>
      <h1>Error: 404</h1>
      <h2>Oops!</h2>
      <h3>The Page Your Are Looking for was not found!</h3>
   </STYLED_404_PAGE>
  );
};

export default NOT_FOUND_404;

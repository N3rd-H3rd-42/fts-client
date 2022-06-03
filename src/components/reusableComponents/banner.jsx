import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  width: 100%;
`;

const Banner = (props) => {
  return (
    <StyledBanner>
      <h1>{props.children}</h1>
    </StyledBanner>
  );
};

export default Banner;

import React from "react";
import styled from "styled-components";

const StyledViewContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and(max-width: 768px) {
    display: block;
  }
`;

const ViewContainer = (props) => {
  return <StyledViewContainer>{props.children}</StyledViewContainer>
};

export default ViewContainer;

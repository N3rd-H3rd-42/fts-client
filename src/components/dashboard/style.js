import styled from 'styled-components';

export const DashboardContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TopNavWrapper = styled.div`
display: flex;
width: 15%;
margin-bottom: 10px;


button {
  width: 80%;
  min-width: 150px;
  margin-top: 5%;
  margin-left: 10%;
}
`;

export const MainCenterWrapper = styled.div`
  border: 1px solid rgb(226, 226, 226);
  width: 65%;
`;

export const RightSideDetailsWrapper = styled.div`
  width: 35%;
  min-width: 400px;
  flex-wrap: wrap;
`;

export const Table = styled.table`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
`;

export const TableHead = styled.thead`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;

input {
  min-width: 220px;
  margin-right: 15px;
}
`;

export const Thead = styled.th`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const TableBody = styled.tbody`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
padding: 10px 0px;
overflow-y: scroll;
overflow: hidden;
::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}
`;

export const BodyRow = styled.tr`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-top: 1px solid rgb(226, 226, 226);
border-bottom: 1px solid rgb(226, 226, 226);
padding: 12px;
flex-wrap: wrap;
:hover {
    background-color: rgb(226, 226, 226);
    transition: 500ms ease-in-out;
  }
`;

export const BodyCell = styled.td``;

export const Button = styled.button`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: rgb(211, 6, 6);
  border-radius: 4px;
  border: none;


  :hover {
  background-color: rgba(211, 6, 6, 0.555);
  border-radius: 4px;
  transition: all 250ms ease-in-out;
  }
`;

export const NewPatientModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentWrapper = styled.div`
  background: #fff;
  max-width: 50%;
  min-height: 50%;
  padding: 25px 25px 50px 25px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ModalFormBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ModalFooter = styled.div`
  width: 20%;
  display: flex;
  justify-self: flex-end;
  justify-content: space-around;
  text-align: center;
  margin-top: 36px;
`;

export const FormGroupRow = styled.div`
  width: ${({ width }) => (width ? `${width}%` : '100%')};
  padding: 12px 10px;
`;

export const InputLabel = styled.span``;

export const InputElement = styled.input`
  height: 39px;
  width: 90%;
  border-radius: 4px;
  border: 2px solid rgba(71, 71, 71, 0.356);
  box-shadow: inset;
  padding-left: 10px;
`;

export const PatientDetailsCardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid rgb(226, 226, 226);
  word-wrap: normal;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  h3 {
    text-align: center;
    width: 80%;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  // @media padding: 0;
  padding-left: 43%;
  padding-right: 2%;
`;

export const CardGroupRow = styled.div`
  border-top: 1px solid rgb(226, 226, 226);
  border-bottom: 1px solid rgb(226, 226, 226);
  border-right: 1px solid rgb(226, 226, 226);
  padding: 10px 0px 0px 10px;
  ${({ groupWidth }) => (groupWidth ? `width: ${groupWidth}%;` : '')}

  :hover {
    background-color: rgb(226, 226, 226);
    transition: 500ms ease-in-out;
  }
`;

export const ValueLabel = styled.span`
  display: block;
  `;

export const ValueText = styled.span`
  display: block;
  color: blue;
  margin-top: 5px;
`;

export const StatusBadge = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ isActive }) => (isActive ? 'green' : 'red')};
`;

export const StatusMessage = styled.h1`
color: rgba(211, 6, 6, 0.555);
align-self: center;
`;
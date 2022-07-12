import styled from 'styled-components';

export const DashboardContainer = styled.div`
  min-height: 50vh;
  display: flex;
`;

export const LeftSideNavWrapper = styled.div`
  border: 1px solid green;
  width: 15%;
`;

export const MainCenterWrapper = styled.div`
  border: 1px solid purple;
  width: 50%;
`;

export const RightSideDetailsWrapper = styled.div`
  border: 1px solid orange;
  width: 35%;
`;

export const Table = styled.table``;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const BodyRow = styled.tr``;

export const BodyCell = styled.td``;

export const Button = styled.button``;

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
    width: 50%;
    height: 50%;
`;

export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const ModalBody = styled.div``;

export const ModalFooter = styled.div``;

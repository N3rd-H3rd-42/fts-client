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
  max-width: 50%;
  min-height: 50%;
  padding: 18px 8px 50px;
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
  text-align: center;
  margin-top: 36px;
`;

export const FormGroupRow = styled.div`
  width: ${({ width }) => (width ? `${width}%` : '100%')};
  padding: 12px 10px;
`;

export const InputLabel = styled.span``;

export const InputElement = styled.input`
  width: 100%;
`;

export const PatientDetailsCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const CardFooter = styled.div`
  border: 1px solid pink;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const CardGroupRow = styled.div`
  border: 1px solid brown;
  ${({ groupWidth }) => (groupWidth ? `width: ${groupWidth}%;` : '')}
`;

export const ValueLabel = styled.span`
  display: block;
`;

export const ValueText = styled.span`
  display: block;
`;

export const StatusBadge = styled.div`
  background: ${({ isActive }) => (isActive ? 'green' : 'red')};
`;

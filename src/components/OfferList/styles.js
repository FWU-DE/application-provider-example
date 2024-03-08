import styled from 'styled-components';

export const Root = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;  
align-items: center;  
`;

export const OfferTitle = styled.h2`
    font-size: 12px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f2f2f2;
`;

export const Logo = styled.img`
  max-width: 150px;
  margin-right: 10px;
`;

export const Title = styled.h1`
  font-size: 26px;
  margin: 0;
  color: #272833;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #333; // Adjust the color according to your design
`;

export const UserInfoLabel = styled.p`
  margin: 0;
  font-size: 0.8em;
`;

export const UserInfoEmail = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const MainContent = styled.div`
  text-align: center;
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
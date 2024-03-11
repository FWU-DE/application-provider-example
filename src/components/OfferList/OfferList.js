import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Root, OfferTitle, HeaderContainer, HeaderContent, MainContent, Logo, Title, UserInfo, UserInfoLabel, UserInfoEmail } from './styles';
import { useAuth } from '../AuthContext/AuthContext';

const OfferList = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { authData } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/application-provider-example');
  };

  useEffect(() => {
    const fetchData = async () => {
      //const apiUrl = '/o/vidis-rest/v1.0/offers/all';
      //const apiUrl = '/o/vidis-rest/v1.0/offers/activated/by-region/test-region';
      const apiUrl = '/o/vidis-rest/v1.0/offers/activated/by-school/DE-VIDIS-vidis_test_101010';
      try {
        // API-Aufruf
        const apiResponse = await axios.get(apiUrl, {
          headers: {
            //Authorization: `Bearer ${authToken}`,
            Authorization: 'Basic ' + btoa(`${authData.email}:${authData.password}`),
            "access-control-allow-origin" : "*",
            'Content-Type': 'application/json'

          },
        });

        // Setze die Daten im State
        setData(apiResponse.data.items);

      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []); 

  if (error) {
    return <div>
    <HeaderContainer>
      <HeaderContent>
        <Logo src="./assets/vidis_logo.png" alt="Logo" />
        <MainContent>
          <Title>Schulportal</Title>
        </MainContent>
      </HeaderContent>
      {authData && (
        <UserInfo>
          <UserInfoLabel>Eingeloggt als:</UserInfoLabel>
          <UserInfoEmail>{authData.email}</UserInfoEmail>
          <button onClick={handleLogout}>Logout</button>
        </UserInfo>
      )}
    </HeaderContainer>
      <Root style={{ display: 'flex', flexWrap: 'wrap' }}>
        <p>Fehler beim Laden der Daten: {error}</p>
      </Root>
    </div>
  }

  if (!data) {
    return <div>
    <HeaderContainer>
      <HeaderContent>
        <Logo src="./assets/vidis_logo.png" alt="Logo" />
        <MainContent>
          <Title>Schulportal</Title>
        </MainContent>
      </HeaderContent>
      {authData && (
        <UserInfo>
          <UserInfoLabel>Eingeloggt als:</UserInfoLabel>
          <UserInfoEmail>{authData.email}</UserInfoEmail>
          <button onClick={handleLogout}>Logout</button>
        </UserInfo>
      )}
    </HeaderContainer>
    <Root style={{ display: 'flex', flexWrap: 'wrap' }}>
      <p>Lade Daten...</p>
    </Root>
  </div>
  }

  return (
    <div>
    <HeaderContainer>
      <HeaderContent>
        <Logo src="./assets/vidis_logo.png" alt="Logo" />
        <MainContent>
          <Title>Schulportal</Title>
        </MainContent>
      </HeaderContent>
      {authData && (
        <UserInfo>
          <UserInfoLabel>Eingeloggt als:</UserInfoLabel>
          <UserInfoEmail>{authData.email}</UserInfoEmail>
          <button onClick={handleLogout}>Logout</button>
        </UserInfo>
      )}
    </HeaderContainer>
      {!authData ? (
        <p>Nicht Eingeloggt</p>
      ) : (
        <Root style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((item, index) => (
              <a href={item.offerLink} target="_blank" key={index} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card style={{ width: '200px', margin: '50px 10px 10px 0', maxHeight: '200px'}}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`data:image/png;base64, ${item.offerLogo}`}
                    title="green iguana"
                    style={{ objectFit: 'cover', maxHeight: '150px'}}
                  />
                  <CardContent>
                    <OfferTitle>
                      {item.offerTitle}
                    </OfferTitle>
                  </CardContent>
                </Card>
              </a>
            ))}
        </Root>
      )}
    </div>
  );
};

export default OfferList;

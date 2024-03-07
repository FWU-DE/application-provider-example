import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Root, OfferTitle, Header, Logo, Title } from './styles';

const OfferList = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //const apiUrl = '/o/vidis-rest/v1.0/offers/all';
      //const apiUrl = '/o/vidis-rest/v1.0/offers/activated/by-region/test-region';
      const apiUrl = '/o/vidis-rest/v1.0/offers/activated/by-school/DE-VIDIS-vidis_test_101010';
      //const authUrl = 'https://service-stage.vidis.schule/o/portal/';
      //const username = '';
      //const password = '';

      try {
        // Authentifizierung muss noch ausgelagert werden in eine Config
        //const authResponse = await axios.post(authUrl, { username, password });
        //const authToken = authResponse.data.token;

        // API-Aufruf
        const apiResponse = await axios.get(apiUrl, {
          headers: {
            //Authorization: `Bearer ${authToken}`,
            Authorization: 'Basic ' + btoa('f85244240@gmail.com:htvB!84jYt'),
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
      <Header>
        <Logo src="../assets/vidis_logo.png" alt="Logo" />
        <Title>Schulportal</Title>
      </Header>
      <Root style={{ display: 'flex', flexWrap: 'wrap' }}>
        <p>Fehler beim Laden der Daten: {error}</p>
      </Root>
    </div>
  }

  if (!data) {
    return <div>
    <Header>
      <Logo src="../assets/vidis_logo.png" alt="Logo" />
      <Title>Schulportal</Title>
    </Header>
    <Root style={{ display: 'flex', flexWrap: 'wrap' }}>
      <p>Leider sind keine Angebote verfügbar</p>
    </Root>
  </div>
  }

  return (
    <div>
      <Header>
        <Logo src="../assets/vidis_logo.png" alt="Logo" />
        <Title>Schulportal</Title>
      </Header>
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

    </div>
  );
};

export default OfferList;

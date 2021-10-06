import React, { useState, useEffect } from 'react'
import {createUser} from '../apiServices/userServices'
import {createTheme, ThemeProvider } from '@mui/material/styles'
import {NotificationContainer, NotificationManager} from 'react-notifications';

import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const mdTheme = createTheme();

import Menu from '../components/menu';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://airnext.io" target="_blank">
          Airnext.io
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const ariaLabel = { 'aria-label': 'description' };

export default function OwnerContract() {
 const [value, setValue] = useState('1');

 const [userData, setUserData] = useState({nom:"",prenom:"",email:"",role:"",pwd:"",cfdpwd:""});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeUserForm = (event,newValue) => {
  console.log(newValue)
    let user = userData;
    if(event.target.placeholder==="Nom"){
      user.nom = event.target.value;
      console.log(user)
      setUserData(user)
    }else if(event.target.placeholder==="Prenom"){
      user.prenom = event.target.value;
      setUserData(user)
    
    }else if(event.target.placeholder==="Email"){
      user.email = event.target.value;
      setUserData(user)
    
    }else if(event.target.placeholder==="Role"){
      user.role = event.target.value;
      setUserData(user)
    
    }else if(event.target.placeholder==="Password"){
      user.pwd = event.target.value;
      setUserData(user)
    
    }else if(event.target.placeholder==="Confirme Password"){
      user.cfdpwd = event.target.value;
      setUserData(user)
    
    }
  };

  const submit = () =>{ 
    debugger;
    const conditions = userData.pwd.localeCompare(userData.cfdpwd) ===0 && userData.nom!=="" && userData.prenom!=="" && userData.email!=="" && userData.pwd!=="";

    if(conditions){
          createUser(userData).then(console.log).catch(console.log);
          createNotification('success');
    }else{
        createNotification('error')
  }
    
  }
 const createNotification = (type) => {
        switch (type) {
          case 'info':
            NotificationManager.info('Info message');
            break;
          case 'success':
            NotificationManager.success('Success message', 'Title here');
            break;
          case 'warning':
            NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
            break;
          case 'error':
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
              alert('callback');
            });
            break;
      }
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
      <Menu/>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
   
        <Box sx={{ width: '100%', typography: 'body1',marginTop:"8vh" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Create user" value="1" />
                <Tab label="Manage user" value="2" />
                <Tab label="Manage pool address" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                  style={{
                          display: "flex",
                          flexDirection: "column",
                          flexWrap: "wrap",
                          justifyContent: "center",
                          alignItems: "center",
                          alignContent: "stretch"
                        }}
                >
                      <Input placeholder="Nom" inputProps={ariaLabel} onChange={handleChangeUserForm} />
                      <Input placeholder="Prenom" inputProps={ariaLabel} onChange={handleChangeUserForm} />
                      <Input placeholder="Email" inputProps={ariaLabel} onChange={handleChangeUserForm} />
                      <Input placeholder="Role" inputProps={ariaLabel} onChange={handleChangeUserForm} />
                      <Input placeholder="Password" inputProps={ariaLabel} onChange={handleChangeUserForm} />
                      <Input placeholder="Confirme Password" inputProps={ariaLabel} onChange={handleChangeUserForm} />
                      <Button onClick={submit}>Submit</Button>
                </Box>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
        <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>

        <NotificationContainer/>
    </ThemeProvider>
  )
}
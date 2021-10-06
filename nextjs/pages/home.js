import Menu from '../components/menu'
import Metamask from '../apiServices/metamaskConnection'
import { useState, useEffect } from 'react'

import {Box, Typography, Container, Button} from '@mui/material'
import {createTheme, ThemeProvider } from '@mui/material/styles';

import {fetchPendingTransaction} from '../apiServices/userServices';

const mdTheme = createTheme();

export default function Home() {
  const [pendingTransfer,setPendingTransfers] = useState(null);
  useEffect(() => {
      fetchPendingTransaction().then(result => setPendingTransfers(result))
  }, [])

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
      <Menu/>
        <Box
              component="main"
              sx={{
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  flexGrow: 1,
                  height: '100vh',
                  overflow: 'auto',
              }}
        >
          <Container maxWidth="lg" sx={{ mt: 9, mb: 4 }}>
            <Typography  variant="h5" sx={{ textAlign: 'center'}}> Welcome on Airnext Administration Web App</Typography>
            <Metamask/>
            {pendingTransfer && <div>{pendingTransfer}</div>}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
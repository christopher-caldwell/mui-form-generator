import { MuiFormProvider } from '@caldwell619/mui-form-generator'
import { Typography, Box } from '@mui/material'

import { Form, defaultValues } from './Form'

function App() {
  return (
    <MuiFormProvider defaultValues={defaultValues}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: ({ spacing }) => spacing(3) }}>
        <Box sx={{ maxWidth: { xs: '95vw', sm: '90vw', md: '70vw', lg: '60vw' } }}>
          <Typography variant='h1' sx={{ fontSize: '2em', marginBottom: ({ spacing }) => spacing(3) }}>
            Super Important Form
          </Typography>
          <Form />
        </Box>
      </Box>
    </MuiFormProvider>
  )
}

export default App

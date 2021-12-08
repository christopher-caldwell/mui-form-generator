import { MuiFormProvider } from '@caldwell619/mui-form-generator'
import { Typography } from '@mui/material'

import { Form, defaultValues } from './Form'

function App() {
  return (
    <MuiFormProvider defaultValues={defaultValues}>
      <>
        <Typography variant='h1' sx={{ fontSize: '2em', marginBottom: ({ spacing }) => spacing(3) }}>
          Super Important Form
        </Typography>
        <Form />
      </>
    </MuiFormProvider>
  )
}

export default App

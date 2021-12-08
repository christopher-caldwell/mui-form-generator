import { MuiFormProvider } from '@caldwell619/mui-form-generator'

import { Form, defaultValues } from './Form'

function App() {
  return (
    <MuiFormProvider defaultValues={defaultValues}>
      <Form />
    </MuiFormProvider>
  )
}

export default App

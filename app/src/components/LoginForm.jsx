import { Alert, Backdrop, Box, Button, CircularProgress, Container, Link, Paper, TextField, Typography } from '@mui/material'
import { useLogin } from '@hooks'

const LoginForm = function () {
  const { login, isLoading, error } = useLogin()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    await login(data.get('username'), data.get('password'))
  }

  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: 999 }} open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>

      <Container component={Paper} maxWidth='xs' sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography className='app-title' component='h1' variant='h4' sx={{ fontWeight: 'bold', pb: 1 }}>
          <Box component='span' color='secondary.main'>Mi</Box>
          <Box component='span' color='primary.main'>gg</Box>
          <Box component='span' color='tertiary.main'>Let</Box>
        </Typography>

        {error && <Alert severity='error'>{error}</Alert>}

        <Box component='form' onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin='normal'
            name='username'
            id='username'
            label='Correo o cédula'
          />

          <TextField
            fullWidth
            margin='normal'
            name='password'
            type='password'
            id='password'
            label='Contraseña'
          />

          <Link href='#'>
            Recuperar contraseña
          </Link>

          <Button
            fullWidth
            disabled={isLoading}
            type='submit'
            variant='contained'
            sx={{ mt: 2 }}
          >
            Iniciar
          </Button>

        </Box>
      </Container>
    </>
  )
}

export default LoginForm

import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import Logo from '../../assets/logo.png'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!").min(5, 'Username at least 5 characters'),
  password: Yup.string().required("Password is required!").min(5, 'Password at least 5 characters'),
})

const Register = () => {
  const initValues = {username: '', password: '', email: '', name: ''}
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/signin')
  }

  const handleSubmit = (values) => {
    console.log('values: ', values)
  }

  return (
    <div>
      <div className='border'>
        <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <img src={Logo} alt="" className='mb-4'/>
          <Formik 
            initialValues={initValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formikProps) => (
              <Form className='space-y-2 w-full'>
                <Field name="username">
                  {({field, form}) => (
                    <FormControl
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <Input
                        className='w-full'
                        {...field}
                        id="username"
                        placeholder='username'
                      />
                      <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({field, form}) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <Input
                        type='password'
                        className='w-full'
                        {...field}
                        id="password"
                        placeholder='password'
                      />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="name">
                  {({field, form}) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        className='w-full'
                        {...field}
                        id="name"
                        placeholder='full name'
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({field, form}) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        className='w-full'
                        {...field}
                        id="email"
                        placeholder='email'
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <p className='text-center text-xs mt-2 text-slate-500'>Users of our services may have uploaded your contact information to Instagram.</p>
                <p className='text-center text-xs text-slate-500'>By signing up, you agree to our Terms, Privacy Policy and Cookie Policy.</p>
                <Button className='w-full' mt={6} colorScheme='blue' type='submit'
                  isLoading={formikProps.isSubmitting}
                >
                  Sign Up
                </Button>    
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className='border w-full border-slate-200 mt-5'>
        <p className='text-center py-2'>
          If you have an account already ?
          <span className='ml-2 text-blue-600 cursor-pointer'
            onClick={handleNavigate}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register
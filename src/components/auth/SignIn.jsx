import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import Logo from '../../assets/logo.png'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from '../store/auth/action'
import { useEffect } from 'react'
import { getUserProfile } from '../store/user/action'

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required!").min(5, 'Username at least 5 characters'),
  password: Yup.string().required("Password is required!").min(5, 'Password at least 5 characters'),
})

const SignIn = () => {
  const initValues = {username: '', password: ''}
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)

  const handleNavigate = () => {
    navigate('/signup')
  }

  const handleSubmit = (values, actions) => {
    console.log(values)
    dispatch(signInAction(values))
    actions.setSubmitting(false)
  }

  useEffect(() => {
    const jwtToken = localStorage.getItem('token')
    console.log('token', jwtToken)
    if(jwtToken){
      dispatch(getUserProfile(jwtToken))
    }
  }, [])

  useEffect(() => {
    const jwtToken = localStorage.getItem('token')
    if(jwtToken && user){
      navigate(`/${user.username}`)
    }
  }, [user])

  return (
    <div>
      <div className='border'>
        <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <img src={Logo} alt="" className='mb-6'/>
          <Formik 
            initialValues={initValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formikProps) => (
              <Form className='space-y-4 w-full'>
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
                <Button className='w-full' mt={4} colorScheme='blue' type='submit'
                  isLoading={formikProps.isSubmitting}
                >
                  Sign In
                </Button>    
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className='border w-full border-slate-200 mt-5'>
        <p className='text-center py-2'>
          If you don't have an account ?
          <span className='ml-2 text-blue-600 cursor-pointer'
            onClick={handleNavigate}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  )
}

export default SignIn
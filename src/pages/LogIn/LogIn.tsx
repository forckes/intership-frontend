import { FC } from 'react'
import {
	Container,
	DontHaveAccount,
	Error,
	ForgotPassword,
	FormContainer,
	ImageComp,
	ImageContainer,
	RegisterLink,
	SignInButton,
	Title
} from './Login.styled'
import { useActions } from '../../hooks/useActions'
import { useAuthRedirect } from '../../hooks/useAuthRedirect'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ILogin } from '../../store/user/user.interface'
import { validEmail } from '../../utils/valid-email'
import Field from '../../components/Field/Field'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const LogIn: FC = () => {
	useAuthRedirect()
	const { login } = useActions()
	const { error } = useTypedSelector(state => state.user)

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ILogin>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<ILogin> = data => {
		login(data)
		reset()
	}

	return (
		<Container>
			<ImageContainer>
				<ImageComp src='images/auth2.png' alt='TownImage' />
			</ImageContainer>
			<FormContainer>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Title>Login</Title>
					<Field
						{...formRegister('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address'
							}
						})}
						title='Email'
						error={errors.email?.message}
						className='mb-4'
						placeholder='Email'
					/>
					<div>
						<Field
							{...formRegister('password', {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should be more than 6 symbols'
								}
							})}
							title='Password'
							error={errors.password?.message}
							type='password'
							placeholder='Password'
						/>
						<ForgotPassword className='text-cyan mt-2 cursor-pointer'>
							Forgot password?
						</ForgotPassword>
						{error && <Error>Invalid Email or Password</Error>}{' '}
					</div>
					<SignInButton className='mt-12 mx-auto flex'>Sign in</SignInButton>
					<DontHaveAccount>
						<p>Don't have account?</p>
						<RegisterLink to='/register'>Sign Up</RegisterLink>
					</DontHaveAccount>
				</form>
			</FormContainer>
		</Container>
	)
}

export default LogIn

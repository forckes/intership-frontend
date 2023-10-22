import { FC } from 'react'
import {
	Container,
	DontHaveAccount,
	Error,
	FormContainer,
	ImageComp,
	ImageContainer,
	RegisterLink,
	SignUpButton,
	Title
} from './Register.styled'
import { useActions } from '../../hooks/useActions'
import { useAuthRedirect } from '../../hooks/useAuthRedirect'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IRegister } from '../../store/user/user.interface'
import { validEmail } from '../../utils/valid-email'
import Field from '../../components/Field/Field'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAuth } from '../../hooks/useAuth'
import { Oval } from 'react-loader-spinner'
import { validMobile } from '../../utils/valid-mobile'

const Register: FC = () => {
	useAuthRedirect()
	const { register } = useActions()
	const { error } = useTypedSelector(state => state.user)
	const { isLoading } = useAuth()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IRegister>({
		defaultValues: {
			phone: '+380987654321'
		},
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IRegister> = data => {
		register(data)
		reset()
	}

	return (
		<Container>
			<ImageContainer>
				<ImageComp src='images/auth2.png' alt='TownImage' />
			</ImageContainer>
			<FormContainer>
				<form onSubmit={handleSubmit(onSubmit)}>
					{isLoading && (
						<Oval
							height={80}
							width={80}
							color='#ab7c2a'
							wrapperStyle={{ marginTop: '10px' }}
							wrapperClass=''
							visible={true}
							ariaLabel='oval-loading'
							secondaryColor='#ab7c2a'
							strokeWidth={3}
							strokeWidthSecondary={2}
						/>
					)}
					<Title>Register</Title>
					<Field
						{...formRegister('name', {
							required: 'Full name is required',
							minLength: {
								value: 4,
								message: 'Min length should be more than 4 symbols'
							}
						})}
						title='Full name'
						error={errors.name?.message}
						type='text'
						className='mb-4'
						placeholder='Name'
					/>
					<Field
						{...formRegister('phone', {
							required: 'Mobile number is required',
							pattern: {
								value: validMobile,
								message: 'Please enter the right mobile number'
							}
						})}
						title='Mobile number (Must starts with +NN0 and after 9 numbers)'
						error={errors.phone?.message}
						type='tel'
						className='mb-4'
						placeholder='Phone number must starts with +NN0 and after 9 numbers'
					/>
					<Field
						{...formRegister('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address'
							}
						})}
						title='Email ID'
						error={errors.email?.message}
						className='mb-4'
						placeholder='Email'
					/>
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
						placeholder='Passwords'
					/>
					{error && <Error>Something went wrong</Error>}{' '}
					<SignUpButton className='mt-12 mx-auto flex'>Sign up</SignUpButton>
					<DontHaveAccount>
						<p>Already have an account?</p>
						<RegisterLink to='/login'>Sign In</RegisterLink>
					</DontHaveAccount>
				</form>
			</FormContainer>
		</Container>
	)
}

export default Register

import clsx from 'clsx'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GrClose } from 'react-icons/gr'

// import { AiFillEye } from 'react-icons/ai'
import { Button } from '@/ui/button/Button'
import { Heading } from '@/ui/heading/Heading'
import { Field } from '@/ui/input/Field'
import { Loader } from '@/ui/loader/Loader'
import { Meta } from '@/ui/meta/Meta'
import { Wrapper } from '@/ui/wrapper/Wrapper'

import { IEmailPassword } from '@/store/user/user.interface'

import { validEmail } from '@/utils/valid-email'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

export const Auth = () => {
	useAuthRedirect()

	const [type, setType] = useState<'login' | 'register'>('login')

	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}

	return (
		<Meta title='Auth'>
			<Wrapper className='relative'>
				<h1>Test Auth page</h1>
			</Wrapper>

			<section className='fixed inset-0 z-20 flex h-full w-full items-center justify-center bg-white/40 backdrop-blur-sm'>
				<div className='flex w-full max-w-4xl flex-col rounded-2xl bg-white p-4 pb-10 shadow-sm'>
					<GrClose className='cursor-pointer self-end text-xl' />

					<section>
						<Heading tag='h1'>amazon</Heading>

						<div className='mt-14 flex flex-col items-center justify-between md:flex-row md:px-10'>
							<section className='w-5/12'>
								<Heading tag='h2' className='mb-8 capitalize'>
									{type}
								</Heading>

								<form
									className={clsx('flex flex-col gap-y-5', {
										'items-center': isLoading
									})}
									onSubmit={handleSubmit(onSubmit)}
								>
									{isLoading ? (
										<Loader />
									) : (
										<>
											<Field
												{...formRegister('email', {
													required: 'Email is required',
													pattern: {
														value: validEmail,
														message: 'Please enter a valid email address'
													}
												})}
												label='Email'
												error={errors.email?.message}
											/>

											<div>
												<Field
													{...formRegister('password', {
														required: 'Password is required',
														minLength: {
															value: 6,
															message: 'Password must be at least 6 characters'
														}
													})}
													label='Password'
													// Icon={<AiFillEye />}
													error={errors.password?.message}
												/>

												{type === 'login' && <p className='mt-2 font-medium text-aqua'>Forgot password?</p>}
											</div>

											<Button className='mt-5 w-fit self-center capitalize' variant='orange' size='xl'>
												{type}
											</Button>
										</>
									)}
								</form>

								{type === 'login' && (
									<div className='mt-8 flex flex-col items-center gap-y-2'>
										<span className='text-sm font-medium'>Also Sign in with</span>

										<Button variant='google' size='xl'>
											Google
										</Button>
									</div>
								)}
							</section>

							<div className='w-5/12'>
								<span className='text-sm'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>Quod, accusantium possimus.</b>
								</span>

								<div className='mt-8 flex flex-col items-center gap-y-3'>
									<span>{type === 'login' ? 'New to Amazon?' : 'Already have an account?'}</span>

									<Button variant='orange' size='full' onClick={() => setType(type === 'login' ? 'register' : 'login')}>
										{type === 'login' ? 'Create your Amazon account' : 'Sign in to your account'}
									</Button>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
		</Meta>
	)
}

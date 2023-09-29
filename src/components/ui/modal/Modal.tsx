'use client'

import type { FC, PropsWithChildren } from 'react'
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { RiCloseFill } from 'react-icons/ri'

import styles from './Modal.module.scss'

interface IModal {
	isOpen: boolean
	closeModal: () => void
}

export const Modal: FC<PropsWithChildren<IModal>> = ({ closeModal, isOpen, children }) => {
	const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'))

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeModal()
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [closeModal])

	useEffect(() => {
		if (isOpen) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = 'unset'
	}, [isOpen])

	if (!isOpen || !modalRef.current) return null

	return ReactDOM.createPortal(
		(
			<section className={styles.overlay}>
				<div className={styles.window}>
					<button onClick={closeModal}>
						<RiCloseFill />
					</button>
					{children}
				</div>
			</section>
		) as any,
		modalRef.current
	)
}

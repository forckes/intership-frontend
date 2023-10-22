import { InputHTMLAttributes } from 'react'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	title: string
	placeholder?: string
	error?: string
}

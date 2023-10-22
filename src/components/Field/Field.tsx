import { forwardRef } from 'react'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ title, placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div>
				<label>
					<span>{title}</span>
					<input type={type} ref={ref} {...rest} placeholder={placeholder} />
				</label>
				{error && <div>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field

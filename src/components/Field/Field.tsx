import { forwardRef } from 'react'
import { IField } from './field.interface'
import {
	Error,
	FieldContainer,
	Input,
	Label,
	LabelContainer
} from './Field.styled'

const Field = forwardRef<HTMLInputElement, IField>(
	({ title, placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<FieldContainer>
				<LabelContainer>
					<Label>{title}</Label>
					<Input type={type} ref={ref} {...rest} placeholder={placeholder} />
				</LabelContainer>
				{error && <Error>{error}</Error>}
			</FieldContainer>
		)
	}
)

Field.displayName = 'Field'

export default Field

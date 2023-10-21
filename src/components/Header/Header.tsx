import { FC } from 'react'
import { Box } from '../Box/Box'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { MdApartment } from 'react-icons/md'

const Header: FC = () => {
	return (
		<>
			<div>
				<div>
					<NavLink to='/'>
						<AiFillHome size={30} />
					</NavLink>

					<div>
						<NavLink to='/deals'>
							<MdApartment size={30} />
							Deals
						</NavLink>
					</div>
				</div>
			</div>
			<Box>
				<Outlet />
			</Box>
		</>
	)
}
export default Header

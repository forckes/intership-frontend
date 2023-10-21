import * as userActions from './user/user.actions'
import { profileSlice } from './profile.slice'

export const rootActions = {
	...userActions,
	...profileSlice.actions
}

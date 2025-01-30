import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slides/auth.slide.slice"

export default configureStore({
    reducer: {
       auth: authReducer,
	}
})
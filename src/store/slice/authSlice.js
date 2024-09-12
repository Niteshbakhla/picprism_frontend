import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
            name: "auth",
            initialState: {
                        accessToken: localStorage.getItem("accessToken") || null,
                        refreshToken: localStorage.getItem("refreshToken") || null,
                        role: localStorage.getItem("role") || null,
                        author: localStorage.getItem("author") || null,
                        isAuthenticated: !!localStorage.getItem("accessToken"),
                        switchMessage: ""
            },
            reducers: {
                        login: (state, action) => {
                                    state.accessToken = action.payload.accessToken;
                                    state.refreshToken = action.payload.refreshToken;
                                    state.role = action.payload.role;
                                    state.author = action.payload.author;
                                    state.isAuthenticated = true;
                                    localStorage.setItem("role", action.payload.role);
                                    localStorage.setItem("accessToken", action.payload.accessToken);
                                    localStorage.setItem("refreshToken", action.payload.refreshToken);
                                    localStorage.setItem("author", action.payload.author);
                                    state.switchMessage = action.payload.message
                        },

                        logout: (state) => {
                                    state.accessToken = null;
                                    state.refreshToken = null;
                                    state.role = null;
                                    state.author = null;
                                    localStorage.removeItem("accessToken")
                                    localStorage.removeItem("refreshToken")
                                    localStorage.removeItem("role")
                                    localStorage.removeItem("author")
                        }

            }
})
export const { login, logout } = authSlice.actions;
export default authSlice.reducer
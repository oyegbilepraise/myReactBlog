import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: {
        issignedIn: false,
        userData:null,
        searchInput:'tech',
        blogData: null
    },
    reducers:{
        setSignedIn: (state, action) => {
            state.issignedIn = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setInput:(state,action)=> {
            state.searchInput = action.payload
        },
        setBlogData: (state, action) => {
            state.blogData = action.payload
        }
    }
})

export const {setSignedIn,setUserData, setInput, setBlogData} = userSlice.actions

export const selectSignedIn = (state) => state.user.issignedIn
export const selectUserData = (state) => state.user.userData
export const selectUserInput = (state) => state.user.searchInput
export const SelectBlogData = (state) => state.user.blogData

export default userSlice.reducer;
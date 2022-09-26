import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', 
    image: 'image',
    name: 'Feri a hegyrol', 
    profession: 'lustalkodo',
    status: 'online' }
]

const postMySlice = createSlice({
    name: 'post',
    initialState,
    reducers: {}
})

export const select = (state) => state.post;

export default postMySlice.reducer
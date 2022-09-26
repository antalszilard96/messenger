import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns'

let img = 'imgs/myprofile.png'
const initialState = [
    { id: '1', my: 'mess', img: "imgs/img2.png", message: 'dustrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survive' ,
    date: sub(new Date(), {minutes: 15 }).toISOString()},
    { id: '2', my: 'mess', img: "imgs/img1.png", message: 'hello',
    date: sub(new Date(), {minutes: 10 }).toISOString()},
    { id: '3', my: 'mess', img: "imgs/img2.png", message: 'Lor a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
    date: sub(new Date(), {minutes: 5 }).toISOString(),},

]

const msgSclice = createSlice({
    name: 'msgs',
    initialState,
    reducers: {
        msgAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(message) {
                return {
                    payload: {
                        id: nanoid(),
                        my: 'mymess',
                        img,
                        date: new Date().toISOString(),
                        message
                    }
                }
                
            }
        }
    }
})

export const selectAllMsgs = (state) => state.msgs;

export const { msgAdded } = msgSclice.actions

export default msgSclice.reducer
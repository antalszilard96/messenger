

import axios from 'axios';




export const getFriends = async () => {
    const response = await axios.get("/db/friends.json")
    return response.data
}


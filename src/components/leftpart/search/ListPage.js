import React from 'react'
import Friend from './Friend'
import { Scrollbars } from 'react-custom-scrollbars';

const ListPage = ({ searchResults }) => {
  const result = searchResults.map(friend => <Friend key={friend.id} friend={friend} />)

  const content = result?.length ? result : <div ><p style={{ position: 'absolute', top: '350px', width: '200px', left: '100px',backgroundColor: "#fff" }}>No Matching Friend</p></div>

  return (
    <Scrollbars style={{
      width:"335px",
      height: "500px",
      position:"relative",
      top: "326px",
      backgroundColor: "#fff",
    }}>
      <div className='result' style={{
        position: "absolute", 
        height: "700px",
        width: "330px",
        backgroundColor: "#fff",
      }}>{content}</div>
    </Scrollbars>
  )
}

export default ListPage
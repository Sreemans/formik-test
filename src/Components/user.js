import React, { memo, useCallback, useEffect, useState } from 'react';
// import './App.css'
const fetchUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => json.slice(0, 2000))
}


const User = memo((props) => {
  const u = props.user;
  return <div key={u.id} className='Box' hidden={u.id == 2}>
    {/* <img src={props.srcUrl} className='user-image' alt={u.name} /> */}
    <p className='user-name'>{u.title}</p>
    <p>{u.id}</p>
    <input onChange={(e) => props.handleChange(u.id, e)} value={u.customValue} />
  </div>
})
User.displayName = 'User'
const Users = () => {
  const [users, setUsers] = useState([]);
  const [, setSearchWord] = useState('');
  const [searchedUsers, setSearchedUsers] = useState([]);
  const uLength = users.length;
  const search = (e) => {
    if (!e.target.value) {
      setSearchedUsers(users);
      return
    }
    setSearchedUsers(users.filter(u => u.title.toLowerCase().includes(e.target.value)))
    setSearchWord(e.target.value)
  }
  let handleChange = useCallback((id, e) => {
    for (let i = 0; i < uLength; i++) {
      if (users[i].id === id) {
        users[i].customValue = e.target.value;
        break;
      }
    }
    setSearchedUsers([...users])
  }, [users])

  useEffect(() => {

    (async () => {
      const res = await fetchUsers();
      setUsers(res);
      setSearchedUsers(res)
      console.log(res)
    })()
  }, [])
  return (<>
    <div id={'hello'}>
      <input type='search' placeholder='search users' onChange={search} />
      <div className='users-info'>
        {searchedUsers.map((u, i) => {
          const srcUrl = `https://robohash.org/1?set=set${i + 1}`
          return <User key={u.id} user={u} srcUrl={srcUrl} handleChange={handleChange} />
        })}
      </div>
      <button onClick={() => {
        console.log({ users })
      }}>Submit</button>

    </div></>)
}
export default Users;



// .users-info {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 30px;
//   }
  
//   .Box {
  
//     width: 300px;
//     height: 300px;
//     border-radius: 5px;
//     background: #98e8e4;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
  
//   }
  
//   .user-image {
//     flex: 3;
//     width: 200px;
  
//   }
  
//   .user-name {
//     font-weight: bold;
//     font-size: 13px;
//   }
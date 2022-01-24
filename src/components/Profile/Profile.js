import React from 'react';
import profile from '../../resources/images/profile.jpg';

export default function Profile() {
  return(
    <div className='wrapper'>
      <h2>Profile</h2>
      <br></br>
      <img src={profile} height='200' width='200'></img>
      <p>Name: </p>
      <p>Surname: </p>
      <p>E-mail: </p>
    </div>
  );
}
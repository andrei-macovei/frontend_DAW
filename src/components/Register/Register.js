import React, { useReducer, useState } from 'react';
import "./Register.css";

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      username: '',
      name: '',
      surname: '',
      email: '',
      // password: '',
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
 }

export default function Register() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 4000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className="register-wrapper">
      <h2>Register Form</h2>
      {submitting &&
       <div>You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
         </div>
     }
      <form onSubmit={handleSubmit}>
        <fieldset disabled={submitting}>
          <label>
            <p>Username</p>
            <input name="username" onChange={handleChange} value={formData.username || ''}/>
          </label>
        {/* </fieldset>
        <fieldset> */}
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
          <label>
            <p>Surname</p>
            <input name="surname" onChange={handleChange} value={formData.surname || ''}/>
          </label>
          <label>
            <p>E-mail</p>
            <input name="email" onChange={handleChange} value={formData.email || ''}/>
          </label>
            <p>Password</p>
            <input name="password" type="password" onChange={handleChange} value={formData.password || ''} />
          </fieldset>
          <div>
            <button type="submit" disabled={submitting}>Submit</button>
          </div>
      </form>
    </div>
  );
}
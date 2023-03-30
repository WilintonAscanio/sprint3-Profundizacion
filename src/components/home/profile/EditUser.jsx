import React, { useState } from 'react'
import photo from '../../../assets/profile.png'
import edit from '../../../assets/edit.svg'
import { Link } from 'react-router-dom'
import back from '../../../assets/back.svg'



const EditUser = () => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <article className='editUser'>
      <Link className='adress__main__back' to={'/profile'}>
        <img src={back} alt="back" />
        <small>Profile</small>
      </Link>
      <figure>
        <img src={photo} alt="profile" />
        <span class="material-symbols-outlined">
          photo_camera
        </span>
        <small>Jenny Tourn</small>

      </figure>
      <div>
        <section>
          {isEdit ? <input type="text" placeholder='Jenny Wilson' />: <input readOnly placeholder='Jenny Wilson' />}
          <img src={edit} alt="edit" onClick={() =>setIsEdit(!isEdit)} />
        </section>
        <section>
          <input type="email" placeholder='user@gmail.com' />
          <img src={edit} alt="edit" />
        </section>
        <section>
          <input type="text" placeholder='+1 124 1254 1254' />
          <img src={edit} alt="edit" />
        </section>
        <section>
          <input type="text" placeholder='21.05.1666' />
          <img src={edit} alt="edit" />
        </section>

      </div>
      <button>Save</button>
    </article>
  )
}

export default EditUser
import React, { useState } from 'react'
import edit from '../../../assets/edit.svg'
import { Link } from 'react-router-dom'
import back from '../../../assets/back.svg'
import { useSelector } from 'react-redux'




const EditUser = () => {
  const [isEdit, setIsEdit] = useState(false)
  const { user } = useSelector((state) => state.users)



  return (
    <article className='editUser'>
      <Link className='adress__main__back' to={'/profile'}>
        <img src={back} alt="back" />
        <small>Profile</small>
      </Link>
      {user?.name ? <>
        <figure>
          <img src={user.photo} alt="profile" />
          <span className="material-symbols-outlined">
            photo_camera
          </span>
          <small>{user.name}</small>

        </figure>
        <div>
          <section>
            {isEdit ? <input type="text" placeholder={user.name} /> : <input readOnly placeholder={user.name} />}
            <img src={edit} alt="edit" onClick={() => setIsEdit(!isEdit)} />
          </section>
          <section>
            <input type="email" placeholder={user.email} />
            <img src={edit} alt="edit" />
          </section>
          <section>
            <input type="text" placeholder={user.phone} />
            <img src={edit} alt="edit" />
          </section>
          <section>
            <input type="text" placeholder={user.birthday} />
            <img src={edit} alt="edit" />
          </section>

        </div>
      </> : <></>}

      <button>Save</button>
    </article>
  )
}

export default EditUser
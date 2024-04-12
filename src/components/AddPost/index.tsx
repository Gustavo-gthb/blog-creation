import React from 'react'
import style from "@/components/AddPost/style.module.css"
import ButtonAdd from './ButtonAdd'

const AddPost = () => {
  return (
    <>

        <div className={style.addPostContainer}>
          <ButtonAdd/>
            <div className={style.addPost}>
                <div >

             

                </div>
            </div>

        </div>
    
    </>
  )
}

export default AddPost;
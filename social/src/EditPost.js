import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({ posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle }) => {

    const { id } = useParams()
    const post = posts.find((post) => (post.id).toString() === id)

    useEffect(()=>{
       
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
          }
    },[post,setEditBody,setEditTitle])
   

    return (
        <main className='NewPost'>
            {editTitle &&
            <>
                <h2>EditPost</h2>
                <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>

                    <label htmlFor='postTitle'>Title:</label>
                    <input
                        id='postTitle'
                        type='text'
                        required
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}


                    />
                    <br />

                    <label htmlFor='postBody'>Post:</label>
                    <textarea
                        id='postBody'
                        type='text'
                        required
                        value={editBody}
                        onChange={(e) => setEditBody(e.target.value)}


                    />
                    <br />
                    <button type='button' onClick={()=>handleEdit(post.id)}> Submit</button>

                </form>
            </>
            }
        </main>
    )
}

export default EditPost

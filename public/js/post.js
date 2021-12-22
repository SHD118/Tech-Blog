let postID;

const newFormHandler = async (event) => {
   event.preventDefault();
 
   const post_title = document.querySelector('#post-name').value;
   const post_content = document.querySelector('#post-desc').value;
 
   if (post_title && post_content) {
     const response = await fetch(`/api/post/`, {
       method: 'POST',
       body: JSON.stringify({ post_title, post_content }),
       headers: {
         'Content-Type': 'application/json',
       },
     });
 
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert('Failed to create post');
     }
   }
 };
 
 const delButtonHandler = async (event) => {
   if (event.target.hasAttribute('data-id')) {
     const id = event.target.getAttribute('data-id');
     console.log("delete id:",
     id)
 
     const response = await fetch(`/api/posts/${id}`, {
       method: 'DELETE',
     });
 
     if (response.ok) {
       document.location.replace('/dashboard');
     } else {
       alert('Failed to delete post');
     }
   }
 };

const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-update')) {
    const id = event.target.getAttribute('data-update');
  
    postID = id;
    console.log("update ID:",
    id)
  const response = await fetch(`/api/posts/${id}`);

  const postResponse = await response.json(); 

document.querySelector('#message').value = postResponse.post_content;
document.querySelector('#recipient').value = postResponse.post_title;

  return postResponse;
  };
};

const sendUpdateButton = async (event) => {
  if (event.target.hasAttribute('data-put')) {



const post_content = document.querySelector('#message').value;
const post_title = document.querySelector('#recipient').value;


    const response = await fetch(`/api/posts/edit/${postID}`, {
      method: 'PUT',
      body: JSON.stringify({post_title, post_content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};
 
 document
   .querySelector('.new-post-form')
   .addEventListener('submit', newFormHandler);
 
 document
   .querySelector('.post-list')
   .addEventListener('click', delButtonHandler);

 document
   .querySelector('.post-list')
   .addEventListener('click', updateButtonHandler);
 
 document
   .querySelector('#update-button')
   .addEventListener('click', sendUpdateButton);
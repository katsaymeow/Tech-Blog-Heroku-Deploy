const newPost = async (event) => {
    event.preventDefault();

    const post_name = document.querySelector('#post-name').value.trim();
    const blog_body = document.querySelector('#blog-body').value.trim();
    //need a const for User if logged in??

    if ( post_name && blog_body) {
        const response = await fetch('/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({ post_name, blog_body}),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            console.log(response);
            let data = await response.json();
            console.log(data);
            document.location.replace(`/blogpost/${data.id}`);
        } else {
            alert('Sorry, that did not happen as we thought.');
        }
    }
};

const deleteBlogPost = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/blogpost/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Well, that is still here. And I have a bug.');
        }
    }
};

document.querySelector('.new-post-form').addEventListener('submit', newPost);
document.querySelector('.post-list').addEventListener('click', deleteBlogPost);
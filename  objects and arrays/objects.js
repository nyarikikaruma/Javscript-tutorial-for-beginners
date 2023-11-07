let blog = {
    title: 'Introduction to JavaScript',
    audience: 'All',
    author: 'Kimani Mwaura',
    publish: function() {
        console.log('Blog has been published.');
    },
    edit: function () {
        return 'Blog has been edited successfully.'
    },
    isRead: false,
    users: {
        
        firstName: 'John',
        lastName: 'Kimathi'
    }

}

console.log(blog['audience']);
console.log(blog.title);
let blog = {
    title: 'Introduction to JavaScript',
    audience: 'All',
    author: 'Kimani Mwaura',
    publish: function() {
        return 'Blog has been published.';
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
console.log(blog.author);

let edited = blog.edit()
let published = blog.publish()

console.log(edited);
console.log(published);
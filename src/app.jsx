var options = {
    thumbnailData: [{
        title: "Click here",
        number: 41,
        imageURL: "http://www.lorempixel.com/250/250/city",
        header: "Galleria",
        description: "Welcome to the site!!"
    },
        {
            title: "Click here",
            number: 25,
            imageURL: "http://www.lorempixel.com/250/250/people",
            header: "Learn Grunt",
            description: "Gulp will speed up your workflow"
        }]
};

var element = React.createElement(ThumbnailList, options);

React.render(element, document.querySelector('.target'));
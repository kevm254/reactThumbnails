var Badge = React.createClass({displayName: "Badge",
    render: function() {
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
            this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function(){
        var list = this.props.thumbnailData.map(function(thumbnailProps){
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });

        return React.createElement("div", null, 
            list
        )
    }
});



var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
        return React.createElement("div", {className: "thumbnail"}, 
            React.createElement("img", {src: this.props.imageURL}), 
            React.createElement("div", {className: "caption"}, 
                React.createElement("h3", null, this.props.header), 
                React.createElement("p", null, this.props.description), 
                React.createElement("p", null, 
                    React.createElement(Badge, {title: this.props.title, number: this.props.number})
                )
            )
        )

    }
});



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

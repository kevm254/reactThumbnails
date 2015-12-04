(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/kevm254/WebstormProjects/reactThumbnails/src/app.jsx":[function(require,module,exports){
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

},{}]},{},["/home/kevm254/WebstormProjects/reactThumbnails/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9rZXZtMjU0L1dlYnN0b3JtUHJvamVjdHMvcmVhY3RUaHVtYm5haWxzL3NyYy9hcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBSSxPQUFPLEdBQUc7SUFDVixhQUFhLEVBQUUsQ0FBQztRQUNaLEtBQUssRUFBRSxZQUFZO1FBQ25CLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLHdDQUF3QztRQUNsRCxNQUFNLEVBQUUsVUFBVTtRQUNsQixXQUFXLEVBQUUsdUJBQXVCO0tBQ3ZDO1FBQ0c7WUFDSSxLQUFLLEVBQUUsWUFBWTtZQUNuQixNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSwwQ0FBMEM7WUFDcEQsTUFBTSxFQUFFLGFBQWE7WUFDckIsV0FBVyxFQUFFLGtDQUFrQztTQUNsRCxDQUFDO0FBQ1YsQ0FBQyxDQUFDOztBQUVGLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUUxRCxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBvcHRpb25zID0ge1xuICAgIHRodW1ibmFpbERhdGE6IFt7XG4gICAgICAgIHRpdGxlOiBcIkNsaWNrIGhlcmVcIixcbiAgICAgICAgbnVtYmVyOiA0MSxcbiAgICAgICAgaW1hZ2VVUkw6IFwiaHR0cDovL3d3dy5sb3JlbXBpeGVsLmNvbS8yNTAvMjUwL2NpdHlcIixcbiAgICAgICAgaGVhZGVyOiBcIkdhbGxlcmlhXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldlbGNvbWUgdG8gdGhlIHNpdGUhIVwiXG4gICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IFwiQ2xpY2sgaGVyZVwiLFxuICAgICAgICAgICAgbnVtYmVyOiAyNSxcbiAgICAgICAgICAgIGltYWdlVVJMOiBcImh0dHA6Ly93d3cubG9yZW1waXhlbC5jb20vMjUwLzI1MC9wZW9wbGVcIixcbiAgICAgICAgICAgIGhlYWRlcjogXCJMZWFybiBHcnVudFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR3VscCB3aWxsIHNwZWVkIHVwIHlvdXIgd29ya2Zsb3dcIlxuICAgICAgICB9XVxufTtcblxudmFyIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbExpc3QsIG9wdGlvbnMpO1xuXG5SZWFjdC5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpKTsiXX0=

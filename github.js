var myProfile = "https://api.github.com/users/MeesterMeetch"
var items = []
$.getJSON(myProfile, function(data) {
  items.push(data);
});

var myRepos = "https://api.github.com/users/MeesterMeetch/repos"

$.getJSON(myRepos, function(data) {
  items.push(data);
});

$('body').on('click',"#repos" function() {
  var myRepos
  $.getJSON(myRepos, function(data) {
    data.map(function({
      return {
        name:  data.name
      }
    }))
  });
})


var

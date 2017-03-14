export default class ListController {
  constructor(view) {
    var j = require('jquery');
    j.ajax({ 
        type: 'GET', 
        url: 'http://scottpreston.github.io/html/data.json', 
        dataType: 'json',
        success: function (data) { 
          view.render(data);       
        }
    });
  }
}


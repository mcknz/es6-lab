import ListModel from './model/model'
import ListController from './controller/controller'
import ListView from './view/view'
import j from 'jquery'

var j = require('jquery');
//j('#listTable').text('Welcome');
var o = new ListController(new ListView(j('#listTable')));
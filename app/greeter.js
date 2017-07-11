var config = require('./config.json');

module.exports = function(){
    var ele = document.createElement("div");
    ele.textContent = config.greetText;
    return ele;
}
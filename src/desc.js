var taskDescriptions = {};
var fn = function desc(taskname, description) {
    if (arguments.length == 1) {
        return taskDescriptions[taskname] || '';
    }
    if (arguments.length == 2) {
        taskDescriptions[taskname] = description;
    }
};
module.exports = fn;
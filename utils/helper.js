// this is used for helper functions that return arrays. (i think) This would be a good place to add any helper functions that will go between the view and the controllers. 

// will need date logic for users to POST

module.exports = {
    format_date: (date) => {
        return date.toLocalDateString();
    },
    // format_time: (date) => {
    //     return date.toLocaleTimeString();
    //   }
};
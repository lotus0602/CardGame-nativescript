var Observable = require("data/observable").Observable;

var observableModule = require("data/observable");

function PokerViewModel() {
    // var viewModel = new Observable();

    // return viewModel;
    var viewModel = observableModule.fromObject({
        // data: "",
        setData: function (id, nextData) {
            console.log("Start setData()");

            // this.set('data', nextData);

            this.set(id, nextData);

        }

    });
    return viewModel;
}

// var data = new observableModule.fromObject({
//     data: "",
//     setData: function (data) {
//         this.set("data", data);
//     },
// });

module.exports = PokerViewModel;


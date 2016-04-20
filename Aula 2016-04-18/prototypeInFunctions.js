
function Evaluation(parameters) {
    this.nbr = parameters.nbr;
    this.text = parameters.text;
    this.date = parameters.date;
    this.duration = parameters.duration;

}

var evaluations = [
    new Evaluation({nbr: 1, text: "Bla, bla, bla", date: "11-04-2016", duration: 45}),
    new Evaluation({nbr: 2, text: "Bla, bla, bla", date: "5-05-2016", duration: 90}),
    new Evaluation({nbr: 3, text: "Bla, bla, bla", date: "2-06-2016", duration: 60}),
    new Evaluation({nbr: 4, text: "Bla, bla, bla", date: "2-06-2016", duration: 45}),
    new Evaluation({nbr: 5, text: "Bla, bla, bla", date: "2-06-2016", duration: 65})
];


Array.prototype.nth = function (n, pred) {
    for (var i = 0; i < this.length; ++i) {
        if(pred(this[i])) {
            if(--n == 0) {
                return this[i];
            }
        }
    }
    return null;
}



evaluations
    .filter(e => e.duration > 60)
    .map((e)  => e.date)
    .forEach(console.log);


var ev1 = evaluations
    .nth(2, e => e.duration > 60)



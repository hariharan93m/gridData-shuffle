// Author : Hariharan Muthukrishnan
function gridDataShuffle(GridData, Interest) {

    var tcID = [];
    var gridValues = JSON.parse(GridData);
    var allowedValue = _.each(gridValues, function (allowedValue) {
        tcID.push(allowedValue.CatagoryName);
    });
    Array.prototype.getDuplicates = function () {
        var duplicates = {};
        for (var i = 0; i < this.length; i++) {
            if (duplicates.hasOwnProperty(this[i])) {
                duplicates[this[i]].push(i);
            } else if (this.lastIndexOf(this[i]) !== i) {
                duplicates[this[i]] = [i];
            }
        }

        return duplicates;
    };

    var resData = JSON.parse(GridData);
    var dupe = tcID.getDuplicates();
    var interestCollection = dupe[Interest];
    if (interestCollection) {
        for (i = 0; i < interestCollection.length; i++) {
            resData = move(resData, interestCollection[i], 0);
        }
    }
    return resData;
}
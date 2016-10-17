'use strict';

var express = require('express'),
    http = require('http'),
    parser = require('body-parser'),
    app;

//create our Express powered HTTP server
app = express();

app.use(express.static(__dirname + '/client'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));


var average = function(nums) {
    var total = 0;
    nums.forEach(function(value) {
        total += value;
    })
    console.log(total);
    return total / nums.length;
};

var largest = function(nums) {
    var largestNum = nums[0];
    nums.forEach(function(value) {
        if (value > largestNum) {
            largestNum = value;
        }
    });
    return largestNum;
};

var oneEven = function(nums) {
    var result = false;
    nums.forEach(function(value) {
        if (value % 2 === 0) {
            result = true;
        }
    });
    return result;
};

var allEven = function(nums) {
    var result = true;
    nums.forEach(function(value) {
        if (value % 2 !== 0) {
            result = false;
        }
    });
    return result;
};

var isContained = function(arrayOfStrings, value) {

    var result = false;
    arrayOfStrings.forEach(function(aString) {
        if (aString == value) {
            result = true;
        }
    });
    return result;
};

var containedTwice = function(arrayOfStrings, value) {
    var count = 0;
    var result = false;
    arrayOfStrings.forEach(function(aString) {
        if (aString === value) {
            count++;
            if (count === 2) {
                result = true;
            }
        }
    });
    return result;
};

app.post('/average', function(req, res) {
    var nums = [];
    req.body.nums.forEach(function(value) {
        nums.push(Number(value));
    })

    res.json({ 'result': average(nums) });
});

app.post('/largest', function(req, res) {
    var nums = [];
    req.body.nums.forEach(function(value) {
        nums.push(Number(value));
    })
    console.log(nums);
    res.json({ 'result': largest(nums) });
});

app.post('/oneEven', function(req, res) {
    var nums = [];
    req.body.nums.forEach(function(value) {
        nums.push(Number(value));
    })
    res.json({ 'result': oneEven(nums) });

});

app.post('/allEven', function(req, res) {
    var nums = [];
    req.body.nums.forEach(function(value) {
        nums.push(Number(value));
    })
    res.json({ 'result': allEven(nums) });

});

app.post('/isContained', function(req, res) {
    var arrayOfStrings = req.body.arrayOfStrings;
    var value = req.body.value;
    res.json({ 'result': isContained(arrayOfStrings, value) });
});

app.post('/containedTwice', function(req, res) {
    var arrayOfStrings = req.body.arrayOfStrings;
    var value = req.body.value;
    res.json({ 'result': containedTwice(arrayOfStrings, value) });
});


http.createServer(app).listen(3000);
console.log('Server is listening on port 3000');
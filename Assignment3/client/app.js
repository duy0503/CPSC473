/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function() {
    'use strict';

    var callAPI = function(user) {

        var values, input, args, firstArg, secondArg;

        switch (user) {
            case 1:
                if ($('#function1 input').val() !== '') {

                    // split the values to an array of numbers
                    values = $('#function1 input').val().split(',');

                    input = { "nums": values };

                    $.post('average', input, function(res) {
                        $('#function1 .result').text('Result: ' + res.result);
                    });

                    $('#function1 input').val('');
                }
                break;

            case 2:
                if ($('#function2 input').val() !== '') {

                    // split the values to an array of numbers
                    values = $('#function2 input').val().split(',');

                    input = { "nums": values };

                    $.post('largest', input, function(res) {
                        $('#function2 .result').text('Result: ' + res.result);
                    });

                    $('#function2 input').val('');
                }
                break;
            case 3:
                if ($('#function3 input').val() !== '') {

                    // split the values to an array of numbers
                    values = $('#function3 input').val().split(',');

                    input = { "nums": values };

                    $.post('oneEven', input, function(res) {
                        $('#function3 .result').text('Result: ' + res.result);
                    });

                    $('#function3 input').val('');
                }
                break;
            case 4:
                if ($('#function4 input').val() !== '') {

                    // split the values to an array of numbers
                    values = $('#function4 input').val().split(',');

                    input = { "nums": values };

                    $.post('allEven', input, function(res) {
                        $('#function4 .result').text('Result: ' + res.result);
                    });

                    $('#function4 input').val('');
                }
                break;

            case 5:
                if ($('#function5 input').val() !== '') {

                    // split the values to an array of numbers
                    args = $('#function5 input').val().split(';');
                    firstArg = args[0].split(',');
                    secondArg = args[1];
                    input = {
                        "arrayOfStrings": firstArg,
                        "value": secondArg
                    };

                    $.post('isContained', input, function(res) {
                        $('#function5 .result').text('Result: ' + res.result);
                    });

                    $('#function5 input').val('');
                }
                break;
            case 6:
                if ($('#function6 input').val() !== '') {

                    // split the values to an array of numbers
                    args = $('#function6 input').val().split(';');
                    firstArg = args[0].split(',');
                    secondArg = args[1];
                    input = {
                        "arrayOfStrings": firstArg,
                        "value": secondArg
                    };

                    $.post('containedTwice', input, function(res) {
                        $('#function6 .result').text('Result: ' + res.result);
                    });

                    $('#function6 input').val('');
                }
                break;
        }

    };

    $('#function1 button').on('click', function(event) {
        callAPI(1);
    });

    $('#function1 input').on('keypress', function(event) {
        if (event.keyCode === 13) {
            callAPI(1);
        }
    });

    $('#function2 button').on('click', function(event) {
        callAPI(2);
    });

    $('#function2 input').on('keypress', function(event) {
        if (event.keyCode === 13) {
            callAPI(2);
        }
    });

    $('#function3 button').on('click', function(event) {
        callAPI(3);
    });

    $('#function3 input').on('keypress', function(event) {
        if (event.keyCode === 13) {
            callAPI(3);
        }
    });

    $('#function4 button').on('click', function(event) {
        callAPI(4);
    });

    $('#function4 input').on('keypress', function(event) {
        if (event.keyCode === 13) {
            callAPI(4);
        }
    });

    $('#function5 button').on('click', function(event) {
        callAPI(5);
    });

    $('#function5 input').on('keypress', function(event) {
        if (event.keyCode === 13) {
            callAPI(5);
        }
    });

    $('#function6 button').on('click', function(event) {
        callAPI(6);
    });

    $('#function6 input').on('keypress', function(event) {
        if (event.keyCode === 13) {
            callAPI(6);
        }
    });

};

$(document).ready(main);
const EventEmitter = require('events').EventEmitter;
const request = require('ajax-request');


function Axidraw(opts) {

    // Api
    this.api = opts.api;

    // Event Emitter
    this.readyEvent = new EventEmitter();

    // Init
    this.init();

}


Axidraw.prototype.init = function()  {

    request({
        url: this.api,
        method: 'GET'
    },
    (err, res, body) => {

        if (res != undefined && res.statusCode === 200) {
            this.readyEvent.emit('isReady', true);
        } else {
            console.log("Can't access to Axidraw")
            this.readyEvent.emit('isReady', false);
        }

    })
}


Axidraw.prototype.setPenDown = function(params = false) {
    console.log('setPenDown\n');

    request({
        url: this.api,
        method: 'PUT',
        data: {
            state: 1
        }
    },
    (err, res, body) => {

        if (params.callback) {
            console.log('done\n');
            params.callback();
        }

    })
}


Axidraw.prototype.setPenUp = function(params = false) {
    console.log('setPenUp\n');

    request({
        url: this.api,
        method: 'PUT',
        data: {
            state: 0
        }
    },
    (err, res, body) => {

        if (params.callback) {
            console.log('done setPenUp\n');
            params.callback();
        }

    })
}

    
Axidraw.prototype.setPenPos = function(params = false) {
    console.log('setPenPos to ' + params.data + '\n');

    // x: x, y: y
    request({
        url: this.api,
        method: 'PUT',
        data: params.data
    },
    (err, res, body) => {
        if (params.callback) {
            params.callback();
        }
    })
}


Axidraw.prototype.setPenBuffer = function(params = false) {
    console.log('setPenBuffer to ' + params.data + '\n');

    params.data.forEach((entry, index) => {
        console.log('IN THE LOOP ' + index + ' setPenBuffer to ' + entry.x + ' ' + entry.y + '\n');
        console.log(params.data.length);

        request({
            url: this.api,
            method: 'PUT',
            data: entry
        },
        (err, res, body) => {
            if (params.callback && index === (params.data.length - 1)) {
                console.log('all done\n');
                params.callback();
            }
        })
    })
}


Axidraw.prototype.resetPenPos = function(params = false) {
    console.log('resetPenPos\n');

    // state: 0
    // x: 0, y: 0
    this.setPenUp({
        callback: () => {
            request({
                url: this.api,
                method: 'PUT',
                data: {
                    x: 0,
                    y: 0
                }
            },
            (err, res, body) => {
                if (params.callback) {
                    console.log('done\n');
                    params.callback();
                }
            })
        }
    })
}


Axidraw.prototype.drawShape = function(data) {
    this.setPenPos({
        data: data[0],
        callback: () => {
            this.setPenDown({
                callback: () => {
                    this.setPenBuffer({
                        data: data,
                        callback: () => {
                            this.resetPenPos({
                                callback: () => {
                                    console.log('ready to draw again');
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}


module.exports = Axidraw;

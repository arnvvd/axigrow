const EventEmitter = require('events').EventEmitter;
const request = require('ajax-request');


function Axidraw(opts) {

    // Api
    this.api = opts.api;

    // Database
    this.database = opts.database;
 
    // Event Emitter
    this.readyEvent = new EventEmitter();

    // Init
    this.init();

}


Axidraw.prototype.init = function()  {

    request({
        url: this.api + '/pen',
        method: 'GET'
    },
    (err, res, body) => {
        if (res != undefined && res.statusCode === 200) {
            this.readyEvent.emit('isReady', true);
        } else {
            console.log('\x1b[31m', "Can't access to Axidraw")
            this.readyEvent.emit('isReady', false);
        }

    })
}


Axidraw.prototype.setPenDown = function(params = false) {
    console.log('setPenDown\n');

    request({
        url: this.api + '/pen',
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
        url: this.api + '/pen',
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
        url: this.api + '/pen',
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
    var lastEntry = {};

    params.data.forEach((entry, index) => {
         console.log('IN THE LOOP ' + index + ' setPenBuffer to ' + entry.x + ' ' + entry.y + '\n');
        // console.log(params.data.length);

        
        // if (Math.abs(entry.x - lastEntry.x) > 2) {
        //     console.log('---------');
        //     console.log('Could be X error for : ', index);
        //     console.log('---------');
        // }

        // if (Math.abs(entry.y - lastEntry.y) > 2) {
        //     console.log('---------');
        //     console.log('Could be Y error for : ', index);
        //     console.log('---------');
        // }
        
        lastEntry = entry;
        
        request({
            url: this.api + '/pen',
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
                url: this.api + '/pen',
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


Axidraw.prototype.drawShape = function(data, datasShape) {
    this.dataArrLength = data.length;
    this.dataIndex = 0;

    this.drawPath(data, this.dataArrLength, this.dataIndex, datasShape)

    // this.setPenPos({
    //     data: data[dataIndex][0],
    //     callback: () => {
    //         this.setPenDown({
    //             callback: () => {
    //                 this.setPenBuffer({
    //                     data: data[dataIndex],
    //                     callback: () => {
    //                         this.resetPenPos({
    //                             callback: () => {

    //                                 if (data[dataIndex] <= dataArrLength) {}
    //                                 this.database.endShape(datasShape);
    //                                 // Set axidraw status to ready
    //                                 this.database.setAxidrawReady();
    //                                 console.log('ready to draw again');
    //                             }
    //                         })
    //                     }
    //                 })
    //             }
    //         })
    //     }
    // })
}


Axidraw.prototype.drawPath = function(data, dataArrLength, dataIndex, datasShape) {

    let storeData = data;
    let storeDataShape = datasShape;


    this.setPenPos({
        data: storeData[this.dataIndex][0],
        callback: () => {
            this.setPenDown({
                callback: () => {
                    this.setPenBuffer({
                        data: storeData[this.dataIndex],

                        callback: () => {
                            // Set Interval
                            // this.bufferInterval = setInterval(() => {
                            //     this.checkBufferPath(storeData, this.dataArrLength, this.dataIndex, storeDataShape);
                            // }, 1000); 

                            


                            setTimeout(() => {

                                console.log(this.dataIndex);
                                console.log(this.dataArrLength);

                                if (this.dataIndex < this.dataArrLength - 1) {

                                    this.dataIndex++;
                                    this.drawPath(storeData, this.dataArrLength, this.dataIndex, storeDataShape);
                                } else {

                                    this.resetPenPos({
                                        callback: () => {
                                            this.database.endShape(storeDataShape);
                                            // Set axidraw status to ready
                                            this.database.setAxidrawReady();
                                            console.log('ready to draw again');
                                        }
                                    })
                                    
                                }
                            }, 2000)
                        }





                    })
                }
            })
        }
    })
}



Axidraw.prototype.checkBufferPath = function(data, dataArrLength, dataIndex, datasShape) {

    let storeData = data;
    let storeDataShape = datasShape;


    request({
        url: this.api + '/buffer',
        method: 'GET',
        json: true
    },
    (err, res, body) => {
        if (res != undefined && res.statusCode === 200) {

            //console.log(body);
            // Check if buffer is running
            console.log(body.running);
            if (body.running === true && this.dataIndex < this.dataArrLength - 1) {

                //console.log('coucou FDP')
                this.checkBufferPath(storeData, this.dataArrLength, this.dataIndex, storeDataShape);

            // if buffer is NOT running    
            } else {

                // Clear BufferInterval
                //clearInterval(this.bufferInterval);

                // Check if there are an other path to draw
                if (this.dataIndex < this.dataArrLength - 1) {
                    this.dataIndex++;
                    this.drawPath(storeData, this.dataArrLength, this.dataIndex, storeDataShape);
                        
                // If there is not path to draw    
                } else {

                    this.resetPenPos({
                        callback: () => {
                            this.database.endShape(storeDataShape);
                            // Set axidraw status to ready
                            this.database.setAxidrawReady();
                            console.log('ready to draw again');
                        }
                    })
                    
                }

            }

        } else {
            console.log('\x1b[31m', "Can't get buffer status")
        }
    })
}

module.exports = Axidraw;

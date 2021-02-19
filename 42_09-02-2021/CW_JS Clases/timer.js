class Timer {
    constructor(count, onUpdateCountHandler, onStopCountHandler) {
        this.count = count;
        this.interval = null;
        this.onUpdateCountHandler = onUpdateCountHandler; // callback for HTML razmetki
        this.onStopCountHandler = onStopCountHandler; // callback for HTML razmetki
    }

    start() {
        const that = this;
        this.interval = setInterval(function() {
            if (that.count > 0) {
                that.count--;
                that.onUpdateCountHandler(that.count);
            } else {
                //clearInterval(that.interval);
                that(stop);
            }
            console.log(that.count);
        }, 1000);
    }
    stop() {
        clearInterval(this.interval);
        this.onStopCountHandler(this.count);
    }
}
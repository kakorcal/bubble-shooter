class Logger {
    static logState(state, suppress) {
        if (!suppress) console.log('%cCurrent State => ' + state, "color:white;background:green;");
    }

    static logObject(obj) {
        console.dir(obj);
    }
}

export default Logger;
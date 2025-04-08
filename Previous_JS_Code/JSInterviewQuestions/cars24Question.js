class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        // If the event does not exist, create a new array for it
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        // Push the callback function to the array of callbacks for this event
        this.events[eventName].push(callback);

        // Return an object with an unsubscribe method
        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
            }
        };
    }

    emit(eventName, args = []) {
        // If the event does not exist, return an empty array
        if (!this.events[eventName]) {
            return [];
        }

        // Get the array of callbacks for this event
        const callbacks = this.events[eventName];

        // Call each callback with the provided arguments and store the results
        const results = callbacks.map(callback => callback(...args));

        return results;
    }
}

// Example usage:
const emitter = new EventEmitter();

console.log(emitter.emit("firstEvent")); // Output: [], no callbacks are subscribed yet

emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });

console.log(emitter.emit("firstEvent")); // Output: [5, 6], returns the output of cb1 and cb2

class EventEmitter{
    constructor(){
        this.events={};
    }
     subscribe(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName]=[];
        }
       this.events[eventName].push(callback);
        return {unsubscribe : ()=>{
            this.events[eventName]=this.events[eventName].filter(cb=>cb !== callback )
        }
    }}
     emit(eventName, args=[]){
        if(!this.events[eventName]){
            return [];
        }
        const callbacks=this.events[eventName];
        const result= callbacks.map(callback=>callback(...args));
        return result;
    }




}
const emitter1 = new EventEmitter();
emitter1.emit("firstEvent"); // [], no callbacks are subscribed yet
emitter1.subscribe("firstEvent", function cb1() { return 5; });
emitter1.subscribe("firstEvent", function cb2() { return 6; });
console.log(emitter1.emit("firstEvent")); // [5, 6], returns the output of cb1 and cb2
//Example 2:
const emitter2 = new EventEmitter();
emitter2.subscribe("firstEvent", function cb1(...args) { return args.join(','); });
console.log(emitter2.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
console.log(emitter2.emit("firstEvent", [3, 4, 6])); // ["3,4,6"]
//Note that the emit method should be able to accept an OPTIONAL array of arguments.
//Example 3:
const emitter3 = new EventEmitter();
const sub = emitter3.subscribe("firstEvent", (...args) => args.join(','));
console.log(emitter3.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
sub.unsubscribe(); // undefined
console.log(emitter3.emit("firstEvent", [4, 5, 6])); // [], there are no subscriptions
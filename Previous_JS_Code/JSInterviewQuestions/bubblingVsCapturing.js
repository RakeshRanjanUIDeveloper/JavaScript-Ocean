// Bubbling and Capturing are the two phases of propagation. 
// In their simplest definitions, bubbling travels from the target to the root, 
// and capturing travels from the root to the target

// /* .capture-bubble {
//             border: 1px solid #000;
//             min-width: 100px;
//             min-height: 100px;
//             padding: 30px;
//         } */
//             #grandParent
//             {
//                 border: 1px solid #000;
//                 padding: 100px;
//             }
//             #parent
//             {
//                 border: 1px solid #000;
//                 padding: 100px;
//             }
//             #child
//             {
//                 border: 1px solid #000;
//                 padding: 100px;
//             }
// <div class="capture-bubble">
//     <div id="grandParent">
//         <div id="parent">
//             <div id="child"></div>
//         </div>
//     </div>

document.querySelector('#grandParent').
    addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("Grand Parent !!!")
    }, false);

document.querySelector('#parent').
    addEventListener("click", (e) => {
        console.log("Parent !!!")
    }, false);

document.querySelector('#child').
    addEventListener("click", (e) => {
        console.log("Child !!!")
    }, false);
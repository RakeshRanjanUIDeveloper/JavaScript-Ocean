{/* <div id="parentblock">
<input type="text" id="name" data-uppercase>
<input type="text" id="pan">
<input type="text" id="aadhar" >
<!-- <ul>
    <li id="computers">Computers</li>
    <li id="cameras">Cameras</li>
    <li id="mobiles">Mobiles</li>
</ul> -->
</div> */}

document.querySelector('#parentblock').
    addEventListener('keyup', (e) => {
        console.log(e);
        if (e.target.dataset.uppercase != undefined) {
            e.target.value = e.target.value.toUpperCase();
        }
    });

// document.querySelector('#parentblock').
//     addEventListener('click', (e) => {
//         console.log(e.target.id);
//         if (e.target.tagName == "LI");
//         {
//             window.location.href = "/" + e.target.id;
//         }
//     })
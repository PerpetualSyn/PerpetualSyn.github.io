// window.onload = function () {
//     test("hello world");
// }
//
// const test = arg => console.log(arg);
//
// *************************************************************
// ****                End Elliott Tests                    ****
// *************************************************************


// let filterCards = ;

let filterCards = (arg) => {
    let items = document.querySelectorAll('.artistCard');
    // console.log(typeof items);
    // for (const element of items) {
        // console.log(element);
    //   }
    for (let el of items) el.style.display = 'none';
    // for (let el of items) el.classList.add("hidden");;
    

    console.log("done");
}

let generateReport = () => {
    console.log("report");

}

let filterCardsArtist = (arg) => {
    let items = document.querySelectorAll('.clientCard');
    // console.log(typeof items);
    // for (const element of items) {
        // console.log(element);
    //   }
    for (let el of items) el.style.display = 'none';
    // for (let el of items) el.classList.add("hidden");;
    

    console.log("done");
}




// row-cols-1 row-cols-md-3 g-4



// for (let el of document.querySelectorAll('.artistCard')) el.style.visibility = 'hidden';

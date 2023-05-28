var list = document.querySelectorAll('.op');
var items = document.querySelectorAll('.paper-panel');
let algorithm = null;

for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
}
items[9].style.display = 'block';

function refreshProgerssBar() {
    if (algorithm === null) {
        document.getElementById("progressBar_steps").innerText = 0;
        document.getElementById("progressBar_current").innerText = 0;
        document.getElementById("progressBar-active").style.width = 0;
    }
    else {
        document.getElementById("progressBar_steps").innerText = algorithm.steps;
        document.getElementById("progressBar_current").innerText = algorithm.current_step;
        document.getElementById("progressBar-active").style.width = (algorithm.current_step / algorithm.steps) * 100 + '%';
    }
}

for (var i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        if (algorithm !== null && algorithm.isplaying === 1) {
            alert("正在播放！");
            while (algorithm !== null && algorithm.isplaying === 1) {
                //loop
            }
        }

        var index = this.getAttribute('data-index');
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[index].style.display = 'block';

        // console.log(this.innerHTML);
        document.getElementById("nameSpace").innerText = this.innerText;

        switch (index) {
            case "0":
                algorithm = prim;
                refreshProgerssBar();
                // document.getElementById("progressBar_steps").innerText = prim.steps;
                // document.getElementById("progressBar_current").innerText = prim.current_step;
                // document.getElementById("progressBar-active").style.width = (prim.current_step / prim.steps) * 100 + '%';
                break;
            case "1":
                algorithm = kruskal;
                refreshProgerssBar()
                break;
            case "2":
                algorithm = dijkstra;
                refreshProgerssBar()
                break;
            case "3":
                algorithm = binarySearch;
                refreshProgerssBar()
                break;
            case "4":
                algorithm = binarySortTree;
                refreshProgerssBar()
                break;
            case "5":
                algorithm = quickSort;
                refreshProgerssBar()
                break;
            case "6":
                algorithm = simpleSelectionSort;
                refreshProgerssBar()
                break;
            case "7":
                algorithm = heapSort;
                refreshProgerssBar()
                break;
            case "8":
                algorithm = meringSort;
                refreshProgerssBar()
                break;
            case "9":
                algorithm = null;
                refreshProgerssBar()
                // document.getElementById("progressBar_steps").innerText = 0;
                // document.getElementById("progressBar_current").innerText = 0;
                // document.getElementById("progressBar-active").style.width = 0;
                break;
        }


    }
}

let build_button = document.getElementById("build");
build_button.onclick = function () {
    if (algorithm === null) {
        return;
    }
    if (algorithm.isplaying === 1) {
        alert("正在播放！");
        return;
    }
    algorithm.status1();
    refreshProgerssBar();
}

let play_button = document.getElementById("play");
play_button.onclick = function () {
    if (algorithm === null) {
        return;
    }
    if (algorithm.isplaying === 1) {
        alert("正在播放！");
        return;
    }
    algorithm.isplaying = 1;
    let currentStep = algorithm.current_step;
    let lastStep = algorithm.steps;
    let waitTime = 0;
    while (currentStep <= lastStep) {
        // alert("p!!!");
        setTimeout(
            (currentStep) => {
                // console.log(currentStep);
                algorithm.changeStatus(currentStep);
                refreshProgerssBar();
            }
            , waitTime, currentStep
        );
        // algorithm.changeStatus(currentStep);
        // refreshProgerssBar();
        currentStep += 1;
        waitTime += 1000;
    }

    algorithm.isplaying = 0;
}

let forward_button = document.getElementById("right");
forward_button.onclick = function () {
    if (algorithm === null) {
        return;
    }
    if (algorithm.isplaying === 1) {
        alert("正在播放！");
        return;
    }

    let currentStep = algorithm.current_step;
    let lastStep = algorithm.steps;
    if (currentStep === lastStep) {
        return;
    }
    else {
        algorithm.changeStatus(currentStep + 1);
        refreshProgerssBar();
    }
    // alert("r!!!");
}

let rewind_button = document.getElementById("left");
rewind_button.onclick = function () {
    if (algorithm === null) {
        return;
    }
    if (algorithm.isplaying === 1) {
        alert("正在播放！");
        return;
    }
    let currentStep = algorithm.current_step;
    let lastStep = algorithm.steps;
    if (currentStep === 1) {
        return;
    }
    else {
        algorithm.changeStatus(currentStep - 1);
        refreshProgerssBar();
    }
    // alert("l!!!");
}

// heapSort.changeStatus(31);
// LemonChiffon

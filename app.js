let boxes = document.querySelectorAll(".box")
let Resetbtn = document.getElementById("btn")

let trun0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let counter = 0
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        counter++
        if (trun0) {
            box.innerHTML = "0";
            trun0 = false;

        } else if (trun0 === false) {
            box.innerHTML = "x"
            trun0 = true
        }
        box.disabled = true
        checkwinner()
    });
});
let checkwinner = () => {
    if (counter === 9) {
        setTimeout(() => {
            alert("Game is tha  Draw!")
            window.location.reload()
        }, 400);
        return;
    }
    for (pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                setTimeout(() => {
                    alert(pos3Val.toUpperCase() + " is the  Winner!");
                    window.location.reload()
                }, 500);

            }
        }
    }
}
Resetbtn.addEventListener("click", () => {
    window.location.reload()
})








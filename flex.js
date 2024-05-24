let second=12;
let tenp=555;

const animateElements = () => {
    const elements = document.querySelectorAll(`.user`);
    for (let i = 0; i < elements.length; i++) {
        console.log(i)
        setTimeout(() => {
                let element=elements[i]
                element.style.backgroundColor = 'yellow'; 
                let scaleValue = 1.1;
                element.style.transform = "scale(" + scaleValue + ")";
                
                element.style.color = "white";
                setTimeout(() => {
                        element.style.backgroundColor = '';
                        element.style.color = "black";
                        element.style.transform= "";
                        }, tenp); 
                }, i * tenp); 
        console.log(second)
    }
};


setInterval(animateElements,second*tenp);





function moveElements() {
    const elements = document.querySelectorAll("h1");
    for (let i = 0; i < elements.length; i++) {
        let index=i+1;
        let q2 = 0; let fps=1000/50;let start=index* 1000
        let direction = 10; 
        setTimeout(() => {
            const moveElement = () => {
                q2 += direction;
                elements[i].style.top = q2 + "px";
                if (q2 <= 0 || q2 >= 1000) {
                    direction *= -1;
                }
                setTimeout(moveElement, fps);//１つの進む感覚
            }
            moveElement();
        console.log(fps)}, start);
    }
}
moveElements();






window.addEventListener('load', function () {
    let start = document.getElementById('startButton');
    let stop = document.getElementById('stopButton');
    start.addEventListener('click', function () {
        class Balls {
            iW = window.innerWidth;
            iH = window.innerHeight;

            constructor() {
                this.size = this.generateNumber(150, 30);
                this.bgColor = this.creatColor();
                this.top = this.topLeft(this.iH, 'w');
                this.left = this.topLeft(this.iW);
                this.border = `5px solid ${this.bgColor}`;
                this.widthHeight = this.generateNumber(this.size, 20);
            }

            generateNumber(num, range = 0) {
                return Math.floor(Math.random() * num + range);

            }

            creatColor() {
                let rgb = 'rgb('
                for (let i = 0; i <= 2; i++) {
                    rgb += this.generateNumber(200);
                    rgb += i < 2 ? ', ' : ');';

                }
                return rgb;
            }

            topLeft(num1, point = 'h') {
                let size = this.generateNumber(num1);
                return point === 'h' ?
                    this.getPosition(size, this.iH) :
                    this.getPosition(size, this.iW)

            }

            getPosition(size, point) {
                if (size > point - this.widthHeight - 5)
                    size = point - this.widthHeight - 5
                return size;
            }

            creatingBall(id) {
                let div = document.createElement('div');
                div.classList.add('ball');
                div.setAttribute('id', `ball_${id}`)
                div.style = `
            width:${this.size}px;
           height:${this.size}px;
           background-color: ${this.bgColor};
           position:absolute;
           border:${this.border};
           top:${this.top}px;
           left:${this.left}px;
           border-radius:50%;`;
                document.body.append(div)
            }
        }

        let counter = 1;
        let interval = setInterval(function () {
            let newBall = new Balls();
            newBall.creatingBall(counter);
            move();
            counter++;
        }, 1200);

        stop.addEventListener('click', function () {
            clearInterval(interval);


        })

        function move() {
            const balls = document.getElementsByClassName('ball');
            // console.log(Array.from(balls));
            [...balls].forEach(function (e, t) {
                // console.log(e,t);

                e.addEventListener('dblclick',event => {
                    function randomPosition(num,range = 50) {
                        return Math.floor(Math.random() * num - range)
                    }

                    randomPosition();
                    e.style = `
                    width: 150px;
                    height: 150px;
                    background-color: red;
                    position:absolute;
                    transition: 5s;
                    top: ${randomPosition(156)}px;
                    left: ${randomPosition(356)}px;
                    border-radius:50%;
                    `
                })
                e.addEventListener('click', function (ev) {
                    console.log(this)
                    let p = this.cloneNode()
                    const main = document.getElementById('main');
                    main.append(p)
                })
            });
        }

    })

// const b = document.querySelectorAll('.ball')
//     console.log(b);


})




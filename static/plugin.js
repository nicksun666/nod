// class Person {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//     }
//     tostring(){
//         return (`${this.x}的年龄是${this.y}`)
//     }
// }
// export default Person
//bg插件
// ;(function (global) {
//     let Modal = function (el) {
//         this.el = typeof el === 'string' ? document.querySelector(el) : el
//     }
//     Modal.prototype = {
//         setBg: function (bg) {
//             this.el.style.backgroundColor = bg;
//         }
//     }
//     global.Modal = Modal
// }(this))
// mask插件
// ;(function (g, d) {
//     let Modal = function (el) {
//         this.el = typeof    el === 'string' ? document.querySelector(el) : el
//             this.el.onclick = function () {
//                 let div = d.createElement('div')
//                 div.className = 'mask'
//                 d.body.appendChild(div)
//                 div.onclick = function () {
//                     d.body.removeChild(div)
//                 }
//         }
//     }
//     Modal.prototype = {}
//     g.Modal = Modal
// }(this, document));
// 拖曳插件
;(function (g, d) {
    let A = function (el) {
        let x, y;
        let mouseX, mouseY;
        let ok = false
      //  for (let i = 0; i < d.getElementsByClassName(el).length; i++) {
            this.el = typeof el === 'string' ? d.getElementsByClassName(el)[0] : el;
            this.el.onmousemove = function (e) {
                if (ok) {
                    this.style.left = e.clientX + x - mouseX + 'px'
                    this.style.top = e.clientY + y - mouseY + 'px'
                }
            }
            this.el.onmousedown = function (e) {
                x = this.offsetLeft
                y = this.offsetTop
                mouseX = e.clientX
                mouseY = e.clientY
                this.style.cursor = 'move'
                this.style.zIndex = '999'
                ok = true
            }
            this.el.onmouseup = function (e) {
                this.style.zIndex = '0'
                ok = false
                x = null
                y = null
                mouseX = null
                mouseY = null
                this.style.cursor = 'default'
            }
     //   }
    }
    A.prototype = {
        setBg: function (bg) {
            this.el.style.background = bg
        }
    }
    g.A = A
}(this, document))
!function (){
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(()=>{
            n += 1
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n >= code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        },10)
    }
    let code =`
    .preview {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FEE433;
    }
    .head {
        width: 100%;
        height: 165px;
        position: relative;
    }
    .head > :not(:last-child) {   /*在.head下只要不是最后一个元素其它所有*/
        z-index: 1;
    }
    .nose {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%; /*百分之50其实是最左边在于中线，所以需要将元素再左移一半才能真正居中。*/
        top: 28px;
        transform: translateX(-50%);/*或者使用margin-left: -12px;*/
    }
    .eye {
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    }
    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: -1px;
        border: 2px solid #000000;
    }
    .eye.left {
        right: 50%;
        margin-right: 80px;
    }
    .eye.right {
        left: 50%;
        margin-left: 80px;
    }
    .face {
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    .face.left {
        right: 50%;
        margin-right: 116px;
    }
    .face.right {
        left: 50%;
        margin-left: 116px;
    }
    .upperLip {
        height: 25px;
        width: 80px;
        border: 2px solid black;
        position: absolute;
        top: 48px;
        background: #FEE433;
    }
    .upperLip.left {
        right: 50%;
        margin-right: 1px;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    .upperLip.right {
        left: 50%;
        margin-left: 1px;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    .lowerLip-wrapper {
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        height: 130px;
        overflow: hidden;
        width: 300px;
        top: 55px;
    }
    .lowerLip {
        height: 3500px;
        width: 300px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    .lowerLip::before {
        content: '';
        position: absolute;
        bottom: -10px;
        width: 100px;
        height: 100px;
        background: #FC4A62;
        left: 50%;
        margin-left: -50px;
        border-radius: 40px;
    }`
    writeCode('',code)

    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
    })
}.call()
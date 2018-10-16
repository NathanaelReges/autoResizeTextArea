export default function autoResizeTextArea ({ele, minHeight, maxHeight}) {

    const module = {}
    let lastHeight = 0
    

    ele.addEventListener('keydown', test)



    module.forceTest = test

    module.reset = () => {
        ele.style.height = minHeight + "px";
    }

    return module



    function test () {

        requestAnimationFrame(() => {
            
            let eleScrolled = false

            //If the page is scrollable and the user is typing a new line out of the viewport
            //the browser by default scrolls down so the line which the user is in becomes visible.
            //You might want to scroll a little more to show some related button or to center correctly
            //the bottom of the element.
            //When this happens this module will call it's onTypedNewLine method and you can assign a function
            //to it and make the adjustments that you need.
            if(module.onTypedNewLine){
                if(ele.scrollTop != 0) 
                    eleScrolled = true
            }

            
            //Force scrollHeight to appear
            ele.style.height = "10px" 


            //Add margin so the space that the element takes on the page doesn't suddenly jumps to 10px 
            //and then to the adjusted height, what could possibly mess up the scrollTop of the page.
            //That's the reason why we need to keep the lastHeight Value.
            ele.style.marginBottom = lastHeight - 10 + 'px' 
                

            //scrollHeight = height of the content
            let newHeight = ele.scrollHeight
            if(minHeight && newHeight < minHeight) newHeight = minHeight
            if(maxHeight && newHeight > maxHeight) newHeight = maxHeight


            ele.style.height = newHeight + "px";
            ele.style.marginBottom = ''
            
            lastHeight = newHeight


            if(eleScrolled){
                module.onTypedNewLine()
            }
            
            if(module.callBack){
                module.callBack()
            }

        })

    }

}



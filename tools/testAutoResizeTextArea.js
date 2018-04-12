scripts['tools/testAutoResizeTextArea.js'] = async function testAutoResizeTextArea () {

    const autoResizeTextArea = scripts['autoResizeTextArea.js']

    const minHeight = 100,
    maxHeight= 300

    let calledCallBack = false


    const textAreaEle = document.createElement('textarea')
    textAreaEle.style = 'height: 100px; padding: 0px; width: 100px; border: none;'
    


    const autoResizeModule = autoResizeTextArea({ele: textAreaEle, minHeight, maxHeight})

    autoResizeModule.callBack = function () {
        calledCallBack = true
    }

    document.body.appendChild(textAreaEle)





    await timeOut()

    textAreaEle.value = "Test test test test test test test test test test test test test test test test test test test test test."

    simulateKeyDown(textAreaEle)

    




    await timeOut()

    //testing
    if(textAreaEle.scrollHeight != textAreaEle.offsetHeight){
        throw ("It didn't resize!")
    }

    if(!calledCallBack){
        throw ("CallBack not working")
    }

    textAreaEle.value = ""

    simulateKeyDown(textAreaEle)




    await timeOut()

    //testing
    if(textAreaEle.scrollHeight != textAreaEle.offsetHeight){
        throw ("minHeight not working.")
    }

    textAreaEle.value = "Test test test test test test test test test test test test test test test test test test test test test Test test test test test test test test test test test test test test test test test test test test test Test test test test test test test test test test test test test test test test test test test test test."

    simulateKeyDown(textAreaEle)






    await timeOut()

    //testing
    if(textAreaEle.offsetHeight > maxHeight){
        throw ("maxHeight not working.")
    }

    
    textAreaEle.value = ""

    autoResizeModule.reset()


    
    
    
    
    await timeOut()

    //testing
    if(textAreaEle.offsetHeight =! minHeight){
        throw ("Reset not working.")
    }






    console.log('The "onTypedNewLine" eventMethod isn`t testable as far as I know.')
    ///But you can test it manually.

    autoResizeModule.onTypedNewLine = () =>{
        //alert("User typed into a new line.")
    }




    function simulateKeyDown (ele) {
        var event = new KeyboardEvent("keydown", {
            bubbles: true,
            cancelable: true,
            view: window
        });

        ele.dispatchEvent(event);
    }


    function timeOut () {
        return new Promise(x=>{setTimeout(x, 30)})
    }

}



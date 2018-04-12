# autoResizeTextArea

const  **module** =  autoResizeTextArea({**ele**, **minHeight**, **maxHeight**})  
<br/>
&ensp;&ensp;**ele** &ensp; The textarea element.  
&ensp;&ensp;**minHeight** &ensp; The height won't get smaller than this.  
 &ensp;&ensp;**maxHeight** &ensp; The height won't get bigger than this.  
<br/> &ensp;&ensp;**module.onKeyDown** &ensp; An eventMethod. You can assign a function to this method and this function will be executed when the user types a letter.  
<br/> &ensp;&ensp;**module.onTypedNewLine** &ensp; If the page is scrollable and the user is typing a new line out of the viewport the browser by default scrolls down so the line which the user is in becomes visible. You might want to scroll a little more to show some related button or to center correctly the bottom of the element. When this happens this module will call it's onTypedNewLine method and you can assign a function to it and make the adjustments that you need.  
<br/> &ensp;&ensp;**module.reset()** &ensp;  It resets the height of the element to the minHeight. You can use it if you have emptied the textAreaElement.value and want that the height is restored to the min.  
<br/> &ensp;&ensp;**module.forceTest()** &ensp;  Retest the element height.

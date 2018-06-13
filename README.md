# autoResizeTextArea

```javascript
const  module =  autoResizeTextArea({ele, minHeight, maxHeight)  
```

<br/>**`ele`** &ensp; The textarea element.  
**`minHeight`** &ensp; The height won't get smaller than this.  
**`maxHeight`** &ensp; The height won't get bigger than this.  

<br/> **`module.onKeyDown`**

An eventMethod. You can assign a function to this method and this function will be executed when the user types a letter.  

<br/> **`module.onTypedNewLine`**

If the page is scrollable and the user is typing a new line out of the viewport the browser by default scrolls down so the line which the user is in becomes visible. You might want to scroll a little more to show some related button or to center correctly the bottom of the element. When this happens this module will call it's onTypedNewLine method and you can assign a function to it and make the adjustments that you need.  

<br/> **`module.reset()`**

It resets the height of the element to the minHeight. You can use it if you have emptied the `textAreaElement.value` and want that the height is restored to the min.  

<br/> **`module.forceTest()`**

Retest the element height.

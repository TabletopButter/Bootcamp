## Question A (30% credit): 

Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

Hint: you may put it in a sample page, load it and check out the network tab in the Devtools.

Case 1:
    `<img src="dog.jpg" style="visibility: hidden" alt="my dog">`

Case 2:
    `<img src="dog.jpg" style="display:none" alt="my dog">`

Either case will not trigger a HTTP get request


## Question B (30% credit)

1. What are `data-` attributes good for? (100 words max)

It helps us embed custom data attributes into html elements. The best example is when we needed to identify each list element in our todo app we embded either mongodatabase ID or the id of the todo

2. Describe the differences between a cookie, sessionStorage and localStorage and when would you use each of them. Please make it your answer, and not a copy and paste from somwhere (150 words max)

These are all client sidded

sessionstorage is only availoable for the duration of the browser session, so if closed it is deleted. this is even applied to the tab, if the tab is closed data is deleted. I would use if you need to store something that changes or something that is temporary

localstorage will last until either you or the user deletes it I would use for longer term use than the sessionstorage

cookies store data that is sent to the server, its expiration is based either on the server side that it is making a request to or client sided so these could last longer than the sessionstorage. I would use these if we wanted to set on how long a valid session is good for



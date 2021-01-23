How many pages - 3?
    1. Landing Page
    2. Current Movies
    3. Watchlist

Libraries & Frameworks
    -express
    -morgan
    -ejs
    -mongoose - mongoDB
    -boostrap
    -The Movie Database - API Key
    -node-tech(or request)
    -cors(may need)

Landing Page 
    -Buttons -> watchlist & current movies
    -What happens when on favorites? how to get to current? vice verca
    -user - multiple options - navbar & buttons? (going with buttons), select all option

Now Playing Page(Current)
    - keep same
    -add watchlist (multipe or single), going with multiple
    -How??
        -raidos, checkboxes, highlighting titles going with checkbox
        -refresh page and add confirmation to top of page

Watchlist Page
    -Maybe just the image and overview
    -maybe at a later stage - flipcards
    -Where is this playing - location based upon current whearabouts
    -Order by something 
    -Delete - remove movie
    -add searchable instead of current


Now Playing Page - Data
    -API
        -trigger? - right now when we click on button, or when the landing page loads
        -checkboxes - inputs
            -forms and default behaviors
            -how do we get data to server?
                -submit button?
                -url or body? URL
            -how do we acces data sent from front?



Server
    -how do we access data?
        -how was it sent? POST? GET? (POST needs body-parser, GET using params or query)
    -what do we do with the data?
        -one selection, multiple selection - test make sure both work 
        -add to database
            -use mongo & mongoose
                -Connection
                -Blueprints
                    -Schema
                    -Model
                -Queries
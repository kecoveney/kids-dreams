# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="https://raw.githubusercontent.com/nashville-software-school/client-side-mastery/master/book-4-deshawns-dog-walking/chapters/images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > When a child is clicked on in the browser, the kids.js module executes. The event handler checks if the clicked element is a child list item by examining the data-type attribute. If the item is a child, it retrieves the child's ID from the data-id attribute, finds the corresponding object in the children array, and displays an alert with the child's name and wish.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > The findCelebrityMatch() function is invoked inside the for..of loop iterating over the kids array to individually match each kid with their corresponding celebrity. Each child in the array has a unique 'celebrityId', requiring a dynamic lookup for the correct celebrity during iteration. Doing this ensures the HTML generation for both kid and celebrity details is accurate and that it will maintain a clean, modular code.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > In the CelebrityList module, displaying the celebrity's sport in the window alert text involves accessing the sport property of the matched celebrity object. This property is obtained by matching each child with their corresponding celebrity using the findCelebrityMatch() function. By including ${kidsStar.sport} in the window.alert message, the sport recorded in the celebrities array is dynamically included, ensuring that the information is displayed alongside the child's name and wish.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The main module orchestrates the assembly of the application's user interface by rendering the pairing, celebrities, and kids components. It begins by importing each component from their respective module and then selects the HTML element with the id 'container' where the UI will be displayed, as defined in the index.html module. The application's HTML markup is constructed by defining a string variable, applicationHTML, which encapsulates the layout and content of the UI. This includes headings, sections for displaying lists of kids and celebrities, and showcasing each pairing.

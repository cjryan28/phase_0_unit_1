#### Include an inline screenshot of your codeschool's points from the profile page: 

http://i.minus.com/iGP160WOI1rSN.png

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 

  The elements tab supports the realtime editing by double clicking and changing attributes. However the elements tab does not save changes. Once a browser is refreshed, the changes are lost. The sources tab supports realtime editing, and includes the option to save the file over the existing file to make the changes permanent.

  * Javascript Debugging

  One can write Javascript in the console tab. If there is an error with the commands, the console will output an error. Clicking the error will open the source tab onto the line causing the error. 

  * Performance Optimization 

  Network and pagespeed tabs are used for performance optimization. Network will display the size and timing of each element loaded onto the website. If the time is unsatisfactory, pagespeed will recommend how to decrease the load time.

* What's the quick key for your OS to spawn the Dev Tools inspector?

  Option, Command, i

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)

  #0b0f11, which is a dark, dark blue

  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

  http://min.us/i/RcrUmfmKZAw4

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

  You can't tweak the color of the text because the text is not visible with Chrome Developer Tools. While you can change and export the formatting of a website, maybe its content is copywritten where you are unable to. 

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 

  An image that is 316 KB. 

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.


  One would look to the network tab. After sorting the size in descending order, find the first image. After clicking on it, click on the preview tab. 

  http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?


  The biggest way to optimize the site would be optimizing images or leveraging browsesr caching. Optimizing images, by compressing them, would reduce size by 885.9KB (39% reduction). 

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?


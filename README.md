![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome Roshan Sequeira,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **June 18, 2024**

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py` if your Python file is named `app.py`, of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

By Default, Gitpod gives you superuser security privileges. Therefore, you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you, so do not share it. If you accidentally make it public, you can create a new one with _Regenerate API Key_.

### Connecting your Mongo database

- **Connect to Mongo CLI on a IDE**
- navigate to your MongoDB Clusters Sandbox
- click **"Connect"** button
- select **"Connect with the MongoDB shell"**
- select **"I have the mongo shell installed"**
- choose **mongosh (2.0 or later)** for : **"Select your mongo shell version"**
- choose option: **"Run your connection string in your command line"**
- in the terminal, paste the copied code `mongo "mongodb+srv://<CLUSTER-NAME>.mongodb.net/<DBname>" --apiVersion 1 --username <USERNAME>`
  - replace all `<angle-bracket>` keys with your own data
- enter password _(will not echo **\*\*\*\*** on screen)_

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**June 18, 2024,** Add Mongo back into template

**June 14, 2024,** Temporarily remove Mongo until the key issue is resolved

**May 28 2024:** Fix Mongo and Links installs

**April 26 2024:** Update node version to 16

**September 20 2023:** Update Python version to 3.9.17.

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!


Title - Blue Heaven Quiz Master 

Purpose of the project.

 India - A History Quiz is created with the the sole purpose of help the public have a deeper understanding of leaders who actively particiapted in the freedom struggle and guided India through her difficult days post independence.

 The salient features of the quiz is sumamrised below 

 It provides the user with a set of 5 questions and 4 options to choose from. 
 A right or wrong selection changes the color of the answer element, pops up and alert and disables all other selections.
 The user has the option to skip a particular question or multiple questions if he/she so chooses to do so. 
 The Next button allows the user to move to the next set of question and answers 
 At the end of 5 questions, the total score is computed and presented to the user 
 The user is also presented with the right answers with a clickable link that takes it to an external Wikipedia page. 
 

Font family and colors.

 a.Google fonts used for styling. Download link below
 (https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&display=swap);
 b. Font-family used for styling : "Cursive", Courier New', Courier, monospace
 c. colors used for styling  :        aliceblue,bisque,brown,cyan,crimson,gold,lightyellow,aqua, magenta,lightcyan,
Technology used in development and testing-: 1.Google Chrome as the Browser. 2.Cloud-based platform :gitpod.io and github for designing and hosting the website 3.Devices with different viewports for testing the responsiveness - Galaxy A54, iPhone 14 Pro, Galaxy A25, Asus AMD Ryzen7 4800H with Radeon Graphics

Website Page and feature Description - Index.html which is named as the Home page ( landing page) :

 1.This page is divided into three sections, Head, Body and Footer. 
 2. The Main element contains the header and hero image 
 2. The Navigation bar in the landing page includes links to three other pages- The Information, Gallery and Contact Us page.
Head Section Screenshot of main landing page with mouse hovering over the home page 1.Language chosen is US English 2.Meta tags "viewport" and "content" are included to make the page responsive. 3.Keywords and description are added in the head section for Search Engine Optimization 4.The CSS stylesheet which is an external file is linked here in the head section 5.The favicon to be displayed within the browser tabs and bookmarks bar is added for three different screen sizes. 6. The title "Taj Mahal " is defined here.

BODY SECTION

 1.The body element contains <div> element, nested within it , two child elements "<a>" and <nav>.
 2. The <nav> included a <ul> with details of each page
 3. below the <div>, under the <main>, ther is a <section> which has the hero image 
 3. It also includes the <footer> element, which has two <h2> elements nested within it ad a<nav> which defines the <ul> for social media.


     Header:
         1.The Header section is common across all pages. It is nested under the Body element 
         2.The Header is created using an H1 element with the content" Taj Mahal- An Eternal Calling"
         3.The header is common across all pages 
header screenshot

      Navigation:
         1.Contains a unordered list to define the three pages-Home, Information, Gallery and Contact Us
         2.Hovering the mouse over these changes the colour to Cyan.
         3.Flex properties applied to UL element nested under the NAV element 
navigation screenshot with hover effect

     HeroImage 
         1.The Heroimage has been clickeed by the author dueing his visit to TAJ 
         2.Inside the hero image just below the header, there are two links ".
         3.Hovering the mouse over it changes the color to gold 
         4."Tickle your curosity" Link, explains the architecture of the taj and has been sourced externally. 
         readme_doc/Architecture of TAJ.png
architecture image
5."Why is Taj so special to me" is an article published by rediff.com where the author has shared his experience and thoughts. why is taj special screenshot 6. both links open in a new tab.

     Footer 
         1.Displays the authorship of the website, copyright information and the social media icons
         2.Hovering mouse over the icons changes the color to "cyan"
         3.Clicking the social media icon opens in a new tab - home page or login page of that particular social media site 
         4.Each icon has a "alt" element to cater for the visually impaired.
         5.The footer is common across all pages 
screenshot of footer

b.Information page: Screenshot of Information Page 

 1.The information page has header <h2> titled" !!! Explore the modern wonder of the world!!!, followed by a short paragraph. 
 2. The paragraph, contents created by the author explains the feelings one could experience. 
    These feeling were experienced by the author on his visit . 
    It also provides some information of past visitors and things to do..  
 3. Four sections on this page provide additonal information.
 4. These sections are  
     I. Reasons to visit the "Wow" factor 
     II. Historical facts 
     III.How to get there 
     IV. Best time to visit ( has an external clickable link ) 
             5. Flex properties were used 
best time to visit section

c. Gallery page : 1.Displays photgraphs taken by the author on his visit. 2. Masonry layout along with media queries was used in style sheet to make this section responsive. gallery home page

d. Contact Us page: 1. This page is used to gather visitor information 2. This page also show a live map of Taj Mahal from google maps screenshot of forminput screenshot of formdata on code institute server

Future Features: True to responsive coding priciples the website also needs to be responsive to future requirements and enhancements. The author plans to add a 3D video section, glowing features and more changes to the sytling and logic using Javascript.

Testing

7.1 code validation a.W3school HTML validator was used to test the code at regular intervals https://validator.w3.org/ html validation screenshot b. CSS validation service at https://jigsaw.w3.org/css-validator/ was used to test the "style.css" sheet. readme_doc/CSS validation.png css validation screenshot

fixed bugs The most bugs fixed were related to CSS styling using flexbox properties and sizing screens for display of images in the gallery.

Deployment

7.1 via gitpod 1.First a GMAIL account was created by Code Institute Code institute gmail account  2. Authorize Code institute for gitpod authorize code institute 3.Every change post additon/modification/alteration of the code in gitpod.io was added to the Github respository using the fllowing three ccommands 1. Git add . 2. Git commit -m "meaninful comment" 3. Git push - to push changes to Github

7.2 via github pages Screenshot of GITHUB - to create an external link for the website Github setting for Secureworkspace external link deployment  Github deployement page  Secureworkspace repository

Credits

a.Referenced sites

 1. Fontawesome.com website was used to download free fonts for the social media icons- Facebook, Twitter, Instagram and Youtube 
 2. An image "architecture of the Taj" was referenced from an external website  https://www.artefactindia.com/Taj-Mahal-and-its-marble-inlay-art.
 3. Favicon code was referenced from the Code Institute.
 4. Masonry code was referenced from the code institute.  
b.Images

 1. The image used for Favicon is of the authors pet cat,copyright and ownership resides with the author.
c.Understanding key concepts.

 1. Basic concepts of flexbox - An excellent guide from Mozilla.org  and can be accessed here: 
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
 2. Controlling ratios of flex items along the main axis- This is the guide I suggest users to read next. 
 https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis
  3. A Complete Guide to Flexbox : This is the a ready reference recokner to be kept handy while coding 
 https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 4. Flex Box from Code Institute https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 5. The Box Model Introduction part 2 - https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LRR101+2/courseware/b4e5b2c91d0a4ee3bb24fac71811b23f/3ec01463d1ce4d82842b74a5706925d3/
 6. Httml Color Codes : https://html-color.codes/
 7. Looking for a specific device’s viewport size? https://viewportsizer.com/devices/
 8. ULTIMATE GUIDE: EM VS REM VS PX WHICH IS BETTER & WHY? https://www.fhoke.com/em-vs-rem-vs-px/
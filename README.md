Cannot commit directly to Master branch. Clone an instance of master before implementing changes. Create a pull request from your branch to master in order to merge changes.

**Pull Request Rules:**
- 1 approval is needed to push to master
- Include a descriptive commit message so we can track history

**Running LocalHost App:**
- make sure you have Node.js installed. Must be running v18+
  - `node -v`
- Change into your project directory:
  - `cd my-react-app`
- Install all dependencies:
  - `npm install`
- Start dev environment: _(See changes live on your localhost)_
  - `npm run dev`
 
  - To get full functionality, do the following.

    Content Filtering:
    Navigate into kids-> Search
    Search 'cocomelon' and all unfiltered results will appear
    Navigate back to home screen
    Navigate into Parents-> Settings-> Content Filtering -> Smartfilter
    Activate all desired filters and exit the page
    Navigate back to home screen and go on kids again
    Navigate into kids-> Search
    Search 'cocomelon' again and the search will be filtered

    Security Pop-up
    In the codebase, navigate to SecurityPage.tsx and go to line 12
    Set the security boolean from true to false
    If your code is running, when you navigate to the parents security page, you will now be denied with a pop-up appearing

    

    
    

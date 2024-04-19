# Frontend Mentor - News homepage solution


## Table of contents
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Github](https://github.com/EAguayodev/Frontendmentor-news-homepage)
- Live Site URL: [Vercel](https://frontendmentor-news-homepage-sandy.vercel.app/)

## My process

### Step 1: Project Setup
- **Initialize your project:** Create a new directory for your project. Initialize it with Git.
- **Folder structure:** Organize your project into folders for better management. For example:
  - `index.html`
  - `css/` (for stylesheets)
  - `js/` (for JavaScript files)

### Step 2: HTML Structure
- **Create the basic structure:** In your `index.html`, define the basic HTML structure.

### Step 3: Styling with CSS Grid
- **Responsive grid:** Use CSS Grid to create a responsive layout for your homepage. Define grid areas for header, main content, sidebar, and footer.
- **Media queries:** Implement media queries to ensure the grid adjusts based on the device's screen size. For example, you might want a single column layout on mobile devices and a multi-column layout on desktops.
- **Styling elements:** Style other elements like fonts, colors, and buttons. Remember to use variables for colors and fonts for easy maintenance.

### Step 4: Adding Interactivity with JavaScript
- **Responsive menu:** Create a responsive menu for mobile devices using vanilla JavaScript to toggle visibility on click.

### Step 5: Hover and Focus States
- **CSS for states:** Define CSS for hover, focus, and active states for all interactive elements to improve user experience and accessibility.
- **JavaScript enhancements:** Optionally use JavaScript to enhance these states if needed (like delay effects or more complex animations).

### Step 6: Testing and Optimization
- **Cross-browser testing:** Test your site in different browsers (Chrome, Firefox, Safari, etc.) to ensure consistency.
- **Responsive testing:** Test on multiple devices to ensure the layout adjusts correctly. Use tools like browser developer tools to simulate different devices.

### Step 7: Deployment
- **Hosting:** Choose a hosting provider to deploy your site. GitHub Pages, Netlify, and Vercel are popular free options for static sites.
- **Deployment:** Upload your files or push your code to a repository if using a service like GitHub Pages.
- **Testing post-deployment:** Ensure everything works as expected after deploying. Check all links, interactive elements, and test on different devices again.


### Built with

- Semantic HTML5 markup
- CSS Grid
- Vanilla JavaScript
- Desktop-first workflow


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<nav>
    <div>
      <a href="index.html">
        <img class="logo" src="assets/images/logo.svg" alt="logo">
      </a>
    </div>
    <button type="menu" class="btn" id="btn-toggle" style="display: none;">
      <img class="icon-menu" id="hamburger-menu" src="assets/images/icon-menu.svg" alt="icon-menu">
      <img class="icon-close" id="hamburger-close" src="assets/images/icon-menu-close.svg" alt="icon-close">
    </button>

    <ul class="menu" id="menu-list">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">New</a>
      </li>
      <li>
        <a href="#">Popular</a>
      </li>
      <li>
        <a href="#">Trending</a>
      </li>
      <li>
        <a href="#">Categories</a>
      </li>
    </ul>
  </nav>
```
```css
.menu {
    display: flex;
    list-style: none;
    font-family: var(--font-family);
    color: var(--Dark-grayish-blue);
    padding: 10px 20px;
    gap: 2.5rem;
    position: relative;
    right: 2.5rem;
}
```
```js
toggleButton.addEventListener('click', function(){
    if (menuToggle) {
        document.getElementById('menu-list').style.display = 'block';
    } else {
        document.getElementById('menu-list').style.display = 'none';
        
    }
})
```

### Continued development

As I progress in my journey of web development, my plan is to embrace increasingly challenging projects that will allow me to deepen my proficiency and explore new technologies. Below are the key areas I intend to focus on:

#### 1. Advancing Vanilla JavaScript Skills
- **Performance optimization:** I will focus on optimizing JavaScript for better performance, which includes lazy loading of resources, efficient DOM manipulation, and memory management.

#### 2. Incorporating CSS Frameworks
- **SCSS:** I plan to use SCSS to enhance my CSS writing. SCSS's features such as variables, nesting, and mixins will help me write more maintainable and concise stylesheets. Learning SCSS will also improve my understanding of CSS pre-processors and their role in a modern development workflow.
- **Tailwind CSS:** Adopting Tailwind CSS will challenge me to approach design in a utility-first manner. This CSS framework will allow me to build responsive designs faster and more efficiently. I will focus on mastering its utility classes and customization capabilities to craft unique and visually appealing interfaces.

#### 3. Exploring New Technologies
- **Frontend frameworks:** As I become more comfortable with vanilla JavaScript, I will gradually start exploring frontend frameworks such as React, Vue, or Angular to see how they can speed up the development process and enhance user and developer experience.

### Conclusion
This structured approach to learning and development not only prepares me for future professional challenges but also aligns with my goal of becoming a versatile and proficient web developer. By pushing the boundaries of what I can achieve with vanilla JavaScript and embracing new technologies like SCSS and Tailwind CSS, I am setting the stage for a fulfilling and dynamic career in web development.


### Useful resources

- [Malven](https://grid.malven.co/) - This helped me for determine which approach to use for css grid for using grid rows or grid columns for the project.
- [w3schools](https://www.w3schools.com/css/css_grid.asp) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@Eaguayodev](https://www.frontendmentor.io/profile/Eaguayodev)
- Twitter - [@eric_emaildev](https://www.twitter.com/eric_emaildev)
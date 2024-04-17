# Frontend Mentor - News homepage solution


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.


### Links

- Solution URL: [Github](https://your-solution-url.com)
- Live Site URL: [Vercel](https://frontendmentor-news-homepage-sandy.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
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
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.


### Useful resources

- [Malven](https://grid.malven.co/) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [w3schools](https://www.w3schools.com/css/css_grid.asp) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@Eaguayodev](https://www.frontendmentor.io/profile/Eaguayodev)
- Twitter - [@eric_emaildev](https://www.twitter.com/eric_emaildev)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
# Workast Technical Assessment

## Try it

[https://workast-giphy.netlify.com](https://workast-giphy.netlify.com)

## Run locally

1. Create a `.env` on the root with your Giphy api key and the following content:

```bash
REACT_APP_GIPHY_API_KEY=YOUR_API_KEY_HERE
```

2. Run in your terminal

```bash
$ npm install && npm start
```

## User Stories

- [x] Display TOP 10 Trending GIFs
- [x] Display a Search box
- [x] If there's a result display TOP 20 GIFs
- [x] Click on GIF will open up in new tab
- [x] Favourite functionality
  - [x] Button to add to user favourites
  - [x] Favorites List are display above Search Box
  - [x] If a GIF from a search result it's already saved as favourite display the fav button differently
  - [x] User can Remove GIF from favourite list

## Audits

I've used LightHouse online and these are some of the [results](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://workast-giphy.netlify.com).
Even though there's some space left for improvement in these [issues](https://i.ibb.co/WFzjBJZ/Captura-de-Pantalla-2019-06-01-a-la-s-18-12-03.png).

---

## Summary

Create a single page application that allows users to search for GIFs.

## User Story

When the user visits the application, they can see the top 10 trending GIFs and a search box. When the user types a word on the search box, the application will look for GIFs matching the search criteria. If there is a result, we will show to the user top 20 results and a button on each GIF to add it to their favorites. When clicking on an image, the GIF will open on a new window. Favorites list will be shown in a section above the search box. If the user performs a search and there is a result which is already saved as favorite, the button will have a different style (heart, star, background color, etc, it’s up to you). Users can remove GIFs from their favorite list.

## Technical requirements

- The solution should be clear, concise, efficient and maintainable.
- Use the Giphy API, all details are [here](https://developers.giphy.com/docs)
- Use React
- Your application should not require any extra backend service / API
- You can use any UI/UX library that you want or even plain HTML elements with your own CSS/LESS/SASS.
  Remember that prettier doesn’t mean better, we will look at your code so don’t spend too much time on this.
- Please use a public repository on Github or Bitbucket and treat this assignment as a work project, doing frequent and descriptive commits as this will be evaluated as well.
- You are of course free to use whatever resources or references that are available to you (e.g. boilerplate code), but it is expected that the design/solution will be 100% your own.

## Keep in mind

Please choose your tools wisely, do not try to impress with the latest framework/library version if you don’t know it well, pick something that you can show off how much knowledge you have and that you can work on it quickly.

This is a simple assessment but you should treat it as an application that will have a lot of traffic, that other developers will work on it simultaneously and that will be extended with new features. You should be familiar with concepts like TDD, Modularity, OOP, etc.

## Deliverables

You should send us back a Github/Bitbucket repository link, with clear instructions on how to build and run the application.

# Lovevery Take Home Test
Challenge assigned by Lovevery to test frontend developement skills.
A demo can be found at https://lovevery-lake.vercel.app/

## Goal
Create a product landing page where a user can input either a due date or date of birth for their child. Upon submitting the date, the user is taken to a specific product page showcasing a Lovevery Play Kit that is appropriate for the child's age in months. Product details and images are dynamically displayed to the user.

## Implementation
The project was scaffolded with create-react-app. The mock was broken down into components to allow for the possibility of re-use should the project be expanded upon in the future. These are stored under the `components` folder. All site assets (images, svgs, etc) are stored under the `assets` folder. All images, such as award badges and product photos, were downloaded from Lovevery's production site and imported using webpack. 

For the carousel, the third-party React Slick library was used. I noticed this was being used on Lovevery's production site, so decided to include it here as well. Most interesting part of the carousel implementation was adding the thumbnails under the main image. There was a lot of searching through the React Slick docs and looking through others' examples before coming up with the solution there.

The product listings are stored in a local file, which is imported directly into the app. The Context API is used to track global changes to the selected product.

To help calculate the child's age based on the date provided, the `date-fns` library was pulled into the project. There was consideration to write the calculation from scratch, but I've found that often there are too many edge cases to handle when working with dates, so in the interest of time (and my own sanity :) ), I decided to go with the third-party lib.

## Challenges
Mostly the challenges were related to time constraint issues. I'd really like to have a clean and atomic commit history. I also had to forego implementing the header to ensure the main functionality was completed. 

Several other items that didn't make the cut include:
- SEO Optimizations
- Typescript typings
- Unit Tests
- Code Comments
- Further mobile optimizations (media queries)
- Test and improve accessibility
- General Code Cleanup

To fetch the product data from an endpoint, for a simple query, I'd probably work with the `fetch` API, although, if any complexity is introduced something lightweight like `axios` could be brought in to help out.

## Testing
Ran out of time to add unit tests, so only some manual testing was accomplished. Several dates were tested and there was a quick look at the UI on mobile. Admittedly, there should be a lot more testing done here.

## Future Enhancements
In addition to some of the items mentioned in the Challenges section above, I'd also like to take a look performance optimizations. Moving the images to a CDN would be at the top of the list. I did see a few bugs with the carousel as well that I'd like to fix. Implementing the header would definitely be up there, as well as improving the overall user experience. I ran out of time before being able to display the child's name, so I'd like to add that to the design. And several smaller items like updating the favicon would be good as well.

Overall it was a fun project, and I appreciate your time in taking a look at it!

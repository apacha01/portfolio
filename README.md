# Frontend Portfolio
A (way better) recreation of my [first portfolio](https://github.com/apacha01/Portafolio_Front-End_V1), this time with React.

# Installation
* Clone the repo with `git clone https://github.com/apacha01/portfolio`.
* Run `npm install`.
* To run it locally use `npm run dev` and if you want to deploy use `npm run deploy`.
*Note:* For deployment you need to have run `git remote add origin ...` with your repo. And don't forget to edit the `homepage` in the `package.json` file.

# Usage
To make your own portfolio just edit the `web-text.json` file in the `assets` folder.

**IMPORTANT:** Any media (img, svg or video) file used in the `web-text.json` has to be in the public folder for production or else you'll have a bunch of `alt` text from all the images. You'll also need to add the repository name as base in `vite.config.js` and as a prefix in the path to the media file (if it's in the public folder, if it's an external file just use `https://...` as usual) (e.g. `/portfolio/imgs/...`).
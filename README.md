# Portfolio

A (way better) recreation of my [first portfolio](https://.github.com/apacha01/Portafolio_Front-End_V1), this time with Astro & TailwindCSS.

Even though it's not 100% customizable, i tried to make it as editable as possible. If you want to use it yourself, then just follow the instructions below.

## How to Install

I used Astro. So installing and running locally is as simple as cloning the repo and using `npm run dev`.
* Clone this repository: `git clone https://.github.com/apacha01/portfolio`
* Run locally with npm: `npm run dev`
* Check a preview for production: `npm run breview` (build and preview in one command)

## Usage

Currently there is support for two languages: `en` English and `es` Spanish. To use it you can just go into the `src/i18n/` directory and change the .json files in there. Follow the structure of my files and change the content only (anyone that wants to make a template and share it is welcomed).

It is already prepared to be deployed with GitHub pages, but you should change the `base` and `site` properties in `astro.config.mjs`. If you actually change the `base`, then you'll have to change it in `src/constants/deploy.js` file and the Layout `<style>` tag where fonts are imported (couldn't find a way to use the constant in css).

Any image, svg, font or assets in general that you want to use should go into the `/public` folder.
> [!IMPORTANT]
> If you have a `base` prefix in your url, then make sure to add it to the files you reference in the .json files if this files are in the `/public` folder. Otherwise just use the absolute URL (`https://example.com/image.webp`). Any anchors you add will need it as well, check `https://docs.astro.build/en/guides/deploy/github/` for more info.


## Some Gotchas

* It only supports two languages. Those two can be any language, but since i used a toggle to implement it, then only two can be used. 
	* If you are okay with English and Spanish just edit the json files in `src/i18n/`.
	* If you want to change the languages, you will have to get into the source code and change the `src/i18n/index.ts` file. Also, you'll have to add support for any new language in the `src/components/LanguageToggler.astro` component (just edit the `LOCALES` constant).
	* You can add as many languages as you want and use it, but you'd need to change the toggler for a `<select>`.

* I have a `description` property for the projects but i thought it looked better without it, so if you added a `description` to the projects in the json files you may want to edit the `src/components/ProjectCard.astro` component.
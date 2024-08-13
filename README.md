# Colombian Api - Johnatan Arango

This is a proyect using the [Colombian API](https://api-colombia.com/) with React. 

---

## Installing and testing the proyect

The instalation of the project is quite easy, just clone the repository and run the command `npm install` to install the required dependencies.

For testing, there's two options: 
1. run `npm run dev` to run the project on a development server. (just be aware that vite throw some errors in development mode with cache. If that happens, just restart the development server)

2. Run `npm run build`and then `npm run preview`. This two commands will serve the production version of the app in a local server. This option is prefered over running in development server.

Eventually, the project will be published on the link: https://yotis56.github.io/colombian_api_johnatan_arango/colombia 

---

## Description

This proyect retrieves data about colombian Presidents, Airports and Touristic Atractions from **API-Colombia* to display it in a react App. 

This App was built with *React* and *react-router-dom*. Nevertheless, react router is used to display the app in the '/colombia_dash' route (using a Navigate component to redirect from / to the desired route ) 

Once the information is retrieved using useEffect, is stored with useState hook. Then this data is grouped and processed with some functions located in the 'utilities' folder. The main objective is to group the information and display a summary.

The display consists of a tab component that allows to switch between entities retrieved from the API, and for every entity is showed the number of records, the time taken from fetching the data, and two collapsible elements that shows the full entity, and the grouped summary. 

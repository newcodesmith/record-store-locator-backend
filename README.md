# record-store-locator-backend

# Vinyl Finder

## Purpose
Finding a record store in your area is not always easy. That's why I have created this mobile app to help you locate stores in your area and read and leave reviews about these stores.

## Technologies used
React Native, Expo, Express, Knex, PostgreSQL, Node.js, Facebook API, Heroku

## Video Demo of app - No Audio
https://www.youtube.com/watch?v=GzqG7FXCtC4&feature=youtu.be

## App Presentation
https://www.youtube.com/watch?v=Cx6EXHlefn4&feature=youtu.be

## Frontend Repo
https://github.com/newcodesmith/record-store-locator-frontend

## Backend Repo
https://github.com/newcodesmith/record-store-locator-backend

## Installation

1. Install dependencies:

	npm install

2. Make sure PostgreSQL is running and create the local database:

	createdb record-store-locator

3. Run migrations + seeds and start the API:

	npm run dev:setup

4. For normal daily development (after setup):

	npm run dev

## Useful scripts

- `npm run db:migrate` - run latest migrations
- `npm run db:seed` - seed database
- `npm run db:setup` - migrate + seed
- `npm run db:reset` - rollback all migrations, then migrate + seed
- `npm run dev` - run server with nodemon
- `npm run dev:setup` - db setup + run server

## License
2018 NEWCODESMITH
# Vinyl-Finder

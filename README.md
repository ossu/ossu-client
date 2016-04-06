# ossu-client

This is a web UI for [Open Source Society University](https://github.com/open-source-society/computer-science)

## Build & development

To run this project locally you need [nodejs](https://nodejs.org/en/) installed.
You also need Ruby, Sass and Compass. Head [over here](https://github.com/gruntjs/grunt-contrib-compass#compass-task)
and follow the instructions to set up your environment.

After you got nodejs, Ruby, Sass and Compass install `grunt` and `bower`:

```bash
$ npm install -g grunt-cli
$ npm install -g bower
```

Then `cd` into project's directory and run `npm install` and `bower install`.
This commands will download all required dependencies.

Now you can run `grunt serve` to start development server.

## Firebase
This project uses [Firebase](https://www.firebase.com/) as a backend server. While the project is in development stage,
our data can be changed / deleted / purged or whatever other bad thing can happen. So you can run it on your own 
instance of Firebase service. Path to Firebase is stored here `app/scripts/angularfire/config.js` in `FBURL` constant.
You can change it as you need and have your own backend.

## Contributing

Currently the project is in its early stage. All the work is done inside `dev` branch.

You can submit your pull requests against `dev` branch according to [standard github guidelines](https://help.github.com/articles/using-pull-requests/)

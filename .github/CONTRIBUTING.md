
# Contributing or modifying the theme

The sphinx_rtd_theme is primarily a [sass](http://www.sass-lang.com) project that requires a few other sass libraries.
We are using [bower](http://www.bower.io) to manage these dependencies and [sass](http://www.sass-lang.com) to build the css.
The good news is that we have a very nice set of [grunt](http://www.gruntjs.com) operations that will not only load these dependencies,
but watch for changes, rebuild the sphinx demo docs and build a distributable version of the theme.
The bad news is this means you will need to set up your environment similar to that
of a front-end developer (vs. that of a python developer). That means installing node and ruby.

## Set up your environment

1. Install sphinx_ into a virtual environment: `pip install sphinx`

2. Install sass: `gem install sass`

3. Install node, bower and grunt.

    ```
    // Install node
    brew install node

    // Install bower and grunt
    npm install -g bower grunt-cli

    // Now that everything is installed, let's install the theme dependecies.
    npm install
    ```
4. Now that our environment is set up, make sure you're in your virtual environment, go to
   this repository in your terminal and run grunt: `grunt`  

   This default task will do the following **very cool things that make it worth the trouble**.

   1. It'll install and update any bower dependencies.
   2. It'll run sphinx and build new docs.
   3. It'll watch for changes to the sass files and build css from the changes.
   4. It'll rebuild the sphinx docs anytime it notices a change to `.rst`, `.html`, `.js`, or `.css` files.

## TODO

* Separate some sass variables at the theme level so you can overwrite some basic colors.

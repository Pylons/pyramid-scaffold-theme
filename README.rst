pyramid-scaffold-theme
======================

Scaffold theme for pyramid projects.


Environment
-----------

At the bare minimum you'll need the following for development:

- Python
- Virtualenv
- NodeJS


Installing
----------

Assuming you have all the recommended tools listed above installed:

1. Clone the project
++++++++++++++++++++
::

  $ git clone git@github.com:Pylons/pyramid-scaffold-theme.git
  $ cd pyramid-scaffold-theme

2. Create and initialize a virtualenv
+++++++++++++++++++++++++++++++++++++
::

  $ virtualenv .

3. Setup Buildout
+++++++++++++++++
::

  $ bin/python bootstrap.py
  $ bin/buildout


4. Run the app
++++++++++++++

You should then be able to run the following command and visit the
running application at http://127.0.0.1:6543:
::

  $ bin/pserve --reload etc/development.ini


5. Update the Project
+++++++++++++++++++++

To update the project:
::

   $ git pull
   $ bin/buildout


6. Update assets
++++++++++++++++

If you're working on the frontend stack you should compile your less
files to css, merge css and javascript, copy files and do other tasks.
The default Grunt task takes care of less compilation and css+js file
concatenation, use this command:
::

  $ bin/grunt

For dist files:
::

  $ bin/grunt dist

Or you can use the watcher while you're working so each time you
modify a file the default task is executed:
::

  $ bin/grunt watch

#[LGBTRights.me](LGBTrights.me)
####A web app to report LBGT rights based on the user's location.

## <a name="contributing"></a>Contributing
In the spirit of [free software][free-sw], **everyone** is encouraged to help
improve this project.

[free-sw]: http://www.fsf.org/licensing/essays/free-sw.html

Here are some ways *you* can contribute:

* by collecting/adding data! (See [data.json](https://github.com/mdb/lgbt_rights/blob/master/public/javascripts/data/data.json) for current formatting)
* by reporting [bugs][issues]
* by suggesting new features
* by writing or editing documentation
* by writing code (**no patch is too small**: fix typos, add comments, clean up
  inconsistent whitespace)
* by refactoring code
* by closing [issues][]
* by reviewing patches

[issues]: https://github.com/mdb/lgbt_rights/issues

## <a name="issues"></a>Submitting an Issue
We use the [GitHub issue tracker][issues] to track bugs and features. Before
submitting a bug report or feature request, check to make sure it hasn't
already been submitted. You can indicate support for an existing issue by
voting it up. When submitting a bug report, please include a [Gist][] that
includes a stack trace and any details that may be necessary to reproduce the
bug. 

[gist]: https://gist.github.com/

## <a name="pulls"></a>Submitting a Pull Request
1. Fork the project.
2. Create a topic branch.
3. Implement your feature or bug fix.
4. { Add tests for your feature or bug fix } (someday).
5. Commit and push your changes.
6. Submit a pull request.

## Requirements
- [Node.js](nodejs.org)
- [Node Package Manager](npmjs.org) (to install dependencies)
- [Redis](redis.io)

## Installation
	# Run Redis server
	$ redis-server
	# Clone the repo
	$ git clone git://github.com/mdb/lgbt_rights.git
	$ cd lgbt_rights
	# install dependcies
	$ npm install
	# run the express.js server using node
	$ node app.js
	

## Loading data
To load the locality data do the following:

    curl -XPOST -d @public/javascripts/data/data.json -H "Content-Type: application/json" 127.0.0.1:3000/load

For state data:

    curl -XPOST -d @public/javascripts/data/states.json -H "Content-Type: application/json" 127.0.0.1:3000/load

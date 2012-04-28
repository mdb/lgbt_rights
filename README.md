#LGBTRights.me

A web app to report LBGT rights based on the user's location.

To load the locality data do the following:

    curl -XPOST -d @public/javascripts/data/data.json -H "Content-Type: application/json" 127.0.0.1:3000/load

For state data:

    curl -XPOST -d @public/javascripts/data/states.json -H "Content-Type: application/json" 127.0.0.1:3000/load

# Code-Demo
Code Demo for importing large CSV and parse them.
The code is thought with large csv files in mind, it does passes the files in stream so that the file is read line by line that way there is no memory load problems.
I have created 2 different providers csv and 2 different csv parsers, to create a new parser all you have to do is duplicate a parser and change the values with the one that are inside the new provider csv.

The project has mongodb-memory-server so all you have to do is install it with npm and that's it.

# Installation
to install it, all you have to do is run:

    npm install

then run the project with:

    npm start

the system will fail if you have a wrong CSV file format. and it will tell you about it.
this can be polished a little bit more, but for the sake of this test i left it as clean as possible, it does have some in code comments so you can understand what it is doing inside.

The system checks if the imported vehicle is already in the DB or if is not, and if it already exists it will update its info

# Endpoints

index endpoint for testing that you have something on the DB

    curl --location --request GET 'http://localhost:3000/'

endpoint to post the CSV file

    curl --location --request POST 'http://localhost:3000/upload' --form 'csv=@"/provider2.csv"' --form 'provider="provider2"'


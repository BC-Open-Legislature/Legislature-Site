## BC Open Legislature Website Frontend

### Description

The frontend for the BC open legislature site that scrapes data from the https://leg.bc.ca and republishes it in a more user friendly and readable way.

---
### Features
* Member data
  * See recent member data like :
    * Debates
* Debates (hansard)
  * View the hansard debates in a more user friendly way with the current speaker as well as their party to make it more readable.

---
### Planned Features
* Voting data
  * Display the voting data of members
  * Display the voting tallies of votes
* Bill data
  * Display the bill data for bills in the legislature

---
### Contributing / Source Code Installation
This covers the installation for developing the application using the source code.

#### Contributing Code
##### Step 1. Installation
###### First clone the github repo to your local machine
```bash
$ git clone https://github.com/BC-Open-Legislature/Legislature-Site-Frontend.git --branch main
```

###### Next enter the directory we just created
```bash
$ cd ./Legislature-Site-Frontend
```

###### Now install all the requirements
```bash
$ yarn install
```

##### Step 2. Data Base Installation / Setup
###### Setup a mongo database
* Setup a remote mongo database on https://cloud.mongodb.com 
* You can also run it on your local machine https://docs.mongodb.com/manual/installation/`

###### Get the mongodb credentials
###### - Remote Database
* Go to the clusters page
* Then click the connect button
* Follow the instructions on the page from there
* Once you have your connection string copy src/example_secrets.json and rename it to secrets.json
* Finally paste your connection string into the MongoCreds portion of the secrets file

###### - Local Database
* Copy src/example_secrets.json
* Paste `mongodb://localhost:8000` into the MongoCreds portion of the secrets file

##### Step 3. Get Placeholder Data
###### - Real Data
* Go to https://github.com/BC-Open-Legislature/Legislature-Site-Scraper and follow the instructions to download the scraper
* Run the scraper

###### - Placeholder Data
* Placeholder data will be added soon


##### Step 4. Running
```base
expo start
```

##### Step 5. Art
* To view the art for the project go to https://www.figma.com/file/ekncs9dkZvFip3amSP0aAq/Legislature-Website

---
### Acknowledgements
This idea and the site design is 100% based on the incredible Canadian open parliament project by Michael Mulley 
https://github.com/michaelmulley/openparliament

The data is also collected from the legislature's site at 
https://leg.bc.ca
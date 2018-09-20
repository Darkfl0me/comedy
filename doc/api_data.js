define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/jokes",
    "title": "Create a Joke",
    "version": "1.0.0",
    "name": "CreateJoke",
    "group": "Jokes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Pass the auth token as a header parameter</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"authorization\": \"bearer {Your authtoken}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the joke passed as a body paramter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jokeBody",
            "description": "<p>Content of the joke passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "category",
            "description": "<p>category of the joke passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Joke",
            "description": "<p>The joke which is created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n category: [Sarcasm]\n title: \"Title of the joke\"\n jokeBody: \"Content of the joke\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/jokes.js",
    "groupTitle": "Jokes"
  },
  {
    "type": "post",
    "url": "/api/v1/delete",
    "title": "Delete a single joke",
    "version": "1.0.0",
    "name": "DeleteJoke",
    "group": "Jokes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Pass the auth token as a header parameter</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"authorization\": \"bearer {Your authtoken}\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the joke passed as a body parameter</p>"
          }
        ]
      }
    },
    "filename": "routes/jokes.js",
    "groupTitle": "Jokes"
  },
  {
    "type": "get",
    "url": "/api/v1/jokes",
    "title": "Get all jokes",
    "version": "1.0.0",
    "name": "GetJokes",
    "group": "Jokes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cat",
            "description": "<p>Category of jokes passed as a query parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inc",
            "description": "<p>Includes id of joke passed as a query parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "JokeList",
            "description": "<p>List of Jokes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n category: [Sarcasm],\n title: \"\",\n jokeBody: \"\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/jokes.js",
    "groupTitle": "Jokes"
  },
  {
    "type": "post",
    "url": "/api/v1/register",
    "title": "Register user",
    "version": "1.0.0",
    "name": "RegisterUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "AuthToken",
            "description": "<p>Returns authtoken to the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n auth: true\n token: {AUTHTOKEN}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/jokes.js",
    "groupTitle": "User"
  }
] });

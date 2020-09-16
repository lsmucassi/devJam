# devJam
# PYTHON REST API
> Implement a simple message board web application. The application should have two services: createMessage
and listMessages. The services should be implemented using a protocol (of your choice) running on HTTP.

> 1. CreateMessage receives a message in the request and persists it in the application. The message should have 4 fields: 
> - title     ---> can be arbitrary strings (with limited lengths)
> - content   ---> can be arbitrary strings (with limited lengths)
> - sender    ---> can be arbitrary strings (with limited lengths)
> - url       ---> Url should be a valid url

> 2. ListMessages service lists all the messages persisted in the application. The service should support two response versions within the same endpoint. The caller is able to define which response version he can handle.

### Requirements
``` 
view requirements file in project
or
run pip -r requirements.txt
```
> *NOTE : The validators_collection module recognizes the pattern https://, ftp://  etc. for validating the URL and .com, .in, .something at the end of the URL.

### Setup
- Clone/download project to your desired destination 
- cd to cloned project
- cd to 'api' directory( if you are on linux or mac run 'startup.sh' file)
  ``` ./startup.sh ```
- open local host displayed on output from running script or python manage.py runserver
- start testing

or 

> skip if you ran the startup file
- Clone/download project to your desired destination 
- cd to cloned project
- create virtual env & activate env (optional)
- cd to main project('api folder') 
- make migrations
  ``` run python manage.py makemigrations ```
- migrate & runserver
  ``` run python manage.py migrate ```
- run server
  ``` run python manage.py runserver ```
- start testing queries 

### Testing API
> after running the server:
```
use the browser or postman or any Http / API testing tool, default host is on local host port 8000

- api/getMessage/sender
: retrieves a single message matching the string passed as a query to the url
e.g http://128.0.0.1:8000/api/getMessage/Mr Secure

- api/listMessages
: displays all messages based on the query passed to the url
e.g
    - http://128.0.0.1:8000/api/listMessages - lists all without urls
    - http://128.0.0.1:8000/api/listMessages:version=2 - default version 2 returns all messages with urls in json form
    - http://128.0.0.1:8000/api/listMessages:version=2-json - returns all messages with urls in json form
    - http://128.0.0.1:8000/api/listMessages:version=2-xml - returns all messages in xml form

- api/createMessage
: creates a message and stores to the db
e.g http://128.0.0.1:8000/api/createMessage
    - populate all 4 required fields
```


## Overview
### Documentation   

**Endpoint**

- `Get api/getMessage/sender` : returns a message based on a given url

- `GET api/listMessages` : displays all messages

- `GET api/listMessages:version=#` : default version 2 displays all messages

- `GET api/listMessages:version=#-content_type` : version two displays all messages based on type passed

- `POST api/createMessage` : creates a message and stores to the server

**Responses**
 - `200 OK` - on success
 - `404 Not Found` - Message Not Found
 - `404 Not Found` - Bad Request, encountered an error

```json
{
  "title": "message title, can be arbitrary string (with limited lengths)",
  "content": "body of the message, can be arbitrary string (with limited lengths)",
  "sender": "sender of the message, can be arbitrary string (with limited lengths)",
  "url": "Url should be a valid url"
}
```

### TODO:

- [x] create a django project
- [x] create an app inside django project
- [x] config setting and & urls
- [x] create a message model
- [x] link model to mysql - using makemigrations and migrate
- [x] create a message model
- [x] create endpoint services
- [x] create api/createMessage
- [x] create api/listMessages
- [x] create api/listMessages:version=#
- [x] create api/listMessages:version=#-content_type
- [x] create api/getMessage/<str:sender>
- [x] validate url

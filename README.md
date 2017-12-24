## he-youtrack-lib

simple SDK for accessing and work with YouTrack REST API

## Install

`npm install he-youtrack-lib`

## Usage

start by requiring the lib

`const YouTrack = require('he-youtrack-lib')`

then create new instance and pass the options

```javascript
const options = {
    baseUrl: "https://youtrack.tajawal.io",
    token: "perm:aWJyYWhpbS5zYWty.eW91dHJhY2suaHVi.cZxnXWfvcBNa5aEl4iD3oQrCkRUKd7"
};

const youtrack = new YouTrack(options);
```

now you ready to user the lib, also you can should export the `const youtrack` to use it in all your modules.

## Example

```javascript
// get current (logedin) user profile
youtrack.user.profile().then((profile) => {
    console.log('success');
    console.dir(profile);
}, (err) => {
    console.log('failed');
    console.dir(err);
});

// get user profile by his login name
youtrack.user.findByLoginName().then((profile) => {
    console.log('success');
    console.dir(profile);
}, (err) => {
    console.log('failed');
    console.dir(err);
});
```

## Availabile API

- General APIs
    - users
    - issues
    - projects
- Administration APIs
    - project
    - users
    - groups
    - role
    - issue link type
    - custom fields
    - statistics
    - permissions
- Import APIs
    - users
    - issues
    - links
    - attachment to an issue
- Export APIs
    - all issues from a project
    - links
- Time Tracking
    - User APIs
        - delete work team
        - edit work team
        - create work team
        - available work items of issue
        - import work items
    - Settings APIs
        - GET system-wide time tracking settings
        - PUT system-wide time tracking settings
        - GET time tracking settings for a project
        - PUT time tracking settings for a project
        - GET work types for a project
- Agile Board
    - list all boards
    - board configuration by id
    - sprint by id
    - new agile configuration
    - update confuguration
    

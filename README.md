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
    - issues (in progress)
    - projects (in progress)
- Administration APIs
    - project (in progress)
    - users (in progress)
    - groups (in progress)
    - role (in progress)
    - issue link type (in progress)
    - custom fields (in progress)
    - statistics (in progress)
    - permissions (in progress)
- Import APIs
    - users (in progress)
    - issues (in progress)
    - links (in progress)
    - attachment to an issue (in progress)
- Export APIs
    - all issues from a project (in progress)
    - links (in progress)
- Time Tracking
    - User APIs
        - delete work team (in progress)
        - edit work team (in progress)
        - create work team (in progress)
        - available work items of issue (in progress)
        - import work items (in progress)
    - Settings APIs
        - GET system-wide time tracking settings (in progress)
        - PUT system-wide time tracking settings (in progress)
        - GET time tracking settings for a project (in progress)
        - PUT time tracking settings for a project (in progress)
        - GET work types for a project (in progress)
- Agile Board
    - list all boards (in progress)
    - board configuration by id (in progress)
    - sprint by id (in progress)
    - new agile configuration (in progress)
    - update confuguration (in progress)
    

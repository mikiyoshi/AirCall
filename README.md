# Deploy at Vercel
[AirCall](https://air-call-mauve.vercel.app/)
```
npm i -g vercel@latest
vercel --version
```
- Push at github
- [Vercel Setting](https://github.com/electerious/Ackee/blob/master/docs/Get%20started.md#2-configure-ackee-1)
  - Add New `Project`
  - `AirCall` import from github
  - Framework Preset `Create React App`
  - Build and Output Settings
    - Set the build command: `yarn build`
    - Set the output directory: `dist`
  - Environment Variables
    - `REACT_APP_DATABASE_URL` and URL from `.env` file


## HOME
### Header `Logo` Link
![home](/docs/home.jpg)
## INBOX
### Header `Inbox` Link
![inbox](/docs/inbox.jpg)
## ALL CALLS
### Header `All Calls` Link
![allcall](/docs/allcall.jpg)
## OUTBOX
### Footer `Phone` Icon
![outbox](/docs/outbox.jpg)
## ARCHIVE
### Footer `Person` Icon
![archive](/docs/archive.jpg)
## NUMBER
### Footer `Grid` Icon
![number](/docs/number.jpg)
## SETTING
### Footer `Gear` Icon
![setting](/docs/setting.jpg)
## VOICEMAIL
### Footer `Record` Icon
![voicemail](/docs/voicemail.jpg)
## DETAIL
### Click at each
![detail](/docs/detail.jpg)


# Node
```
nvm install v14
```

## Summary

The goal of this test is to make you code a small ReactJS app. We have prepared a skeleton app for you, but please change whatever you want (CSS files, HTML structure, JS structure, etc).

The app will have the following features:
- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call
- **Archive** - the final user should be able to archive (and unarchive) a call. Archived calls will no longer be displayed on the Activity Feed and should have a separate Archived Tab.
- A button to archive all calls in the activity feed
- A button to unarchive all calls in the archived calls tab

Show us what you can do in 24 hours. You will be assessed on the following parameters: 
- Focus on design (Pay attention to the UI/UX and transitions)
- Best React Practices
- Code Readability and Maintainability

## Submission
After you're done with the assignment, please submit a link to the **GitHub/Bitbucket repository** (make sure it's public) with your code **AND** a deployment link where our recruiters can interact with the live version. You can use freely available tools like **Netlify, Vercel, Heroku, etc** to deploy your React application.

**Note:** Submissions without a valid repository and deployment link will be removed from any further consideration.

To give you an idea, here's what our app looks like:


![app](https://user-images.githubusercontent.com/630714/29357034-763d7216-8276-11e7-8bcb-e77d9645dfcc.png)

## Installation

We're using [yarn](https://yarnpkg.com) here (but you can use npm):

```
yarn install
yarn start
```

## API documentation

### Routes

Here is the API address: https://cerulean-marlin-wig.cyclic.app/ <br>
If you run into a CORS error, please prepend the base URL with this CORS Anywhere server URL: https://charming-bat-singlet.cyclic.app/ <br>
The prepended base URL will look like this https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/

The API is hosted on a free server, which is why the first time you call the API, it will throw an error. The server goes to sleep if there hasn't been any activity for a while, but after 30-60 seconds of the first call, it should work as expected. Please reach out to us in case it doesn't.

- **GET** - BASE_URL/activities: get calls to display in the Activity Feed
- **GET** - BASE_URL/activities/<call_id> retrieve a specific call details
- **PATCH** - BASE_URL/activities/<call_id> update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:
```
{
  is_archived: true
}
```
- **PATCH** - BASE_URL/reset: Reset all calls to initial state (usefull if you archived all calls).

### Call object

- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - Aircall number used for the call
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.

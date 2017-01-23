# Recruitment Test - Charity Donations
An unattended front end recruitment test for JustGiving.

## The Challenge
Create an application to display the latest donations for a charity using [React](https://facebook.github.io/react) and [Node.js](https://nodejs.org).

### Requirements
A good solution will
* be production ready
* work on evergreen browsers
* have good test coverage and show evidence of TDD
* have an elegant user experience and design
* use _appropriate_ front end tooling

Your solution should be performant, consider the `DOMContentLoaded` and `load` events, and first time to paint. You may choose to use server-side rendering or service workers to achieve this.

Please put your solution on a repository hosting service such as [GitHub](https://github.com) or [Bitbucket](https://bitbucket.org) (it is always nice to see a clean commit history). Finally, don't forget the README file for your solution.

### Concessions
If you are applying for a junior position, we would encourage you to use the [create react app](https://github.com/facebookincubator/create-react-app) project. The production readiness is less important here, we will help you with that when you get hired.

#### Use of frameworks

Consider the point of the test, it is to get an understanding of your knowledge of the language, libraries and tooling. If you feel you need to use a fully-fledged framework such as [create react app](https://github.com/facebookincubator/create-react-app) or [next.js](https://github.com/zeit/next.js) we cannot determine your understanding of the underlying tooling.

### Getting Started
1. Create an account on [JustGiving Developer](https://developer.justgiving.com/) to obtain an `appId`.

2. Choose a `charityId` from one of the charities below.

	| Charity                                                                       | ID     |
	|-------------------------------------------------------------------------------|--------|
	| [British Heart Foundation](https://www.justgiving.com/britishheartfoundation) | 183092 |
	| [Macmillan Cancer Support](https://www.justgiving.com/macmillan)              | 2116   |
	| [Cancer Research UK](https://www.justgiving.com/cancerresearchuk)             | 2357   |
	| [Oxfam](https://www.justgiving.com/oxfam)                                     | 13441  |
	| [National Trust](https://www.justgiving.com/nationaltrust)                    | 183560 |
	| [Save the Children](https://www.justgiving.com/savethechildren)               | 18570  |

3. Substitute the `appId` and `charityId` in the [curl](https://curl.haxx.se/docs/manual.html) commands below. You should be able to use these commands to retrieve information about your charity.
```
curl -H "Content-Type: application/json" https://api.justgiving.com/{appId}/v1/charity/{charityId}
```
```
curl -H "Content-Type: application/json" https://api.justgiving.com/{appId}/v1/charity/{charityId}/donations
```

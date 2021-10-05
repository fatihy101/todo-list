# To-do List App
#### To test and see the project [click here](https://fatihy-todo-list.web.app/)

**Project Scripts**
---

```bash
# Project Setup
npm install
# Run
npm run serve
# Test
npm run test:unit
# Publish Pact
npm run pact:publish

```
**About Tests**
---
- [Tests](/tests/unit) in this project are separated in two concerns:
  - **Unit tests:** Written in Jest. I tried to cover both UI and functional parts, however one of the most important part of the app hasn't tested yet which is the _vuex/actions_. Therefore, _test coverage percentage in all files_ might be a little lower than expected. The reason is, _mocking the Axios (Moxios) and Vuex Store_ together was a bit challenging.
  - **Contract test:** Actually, contract tests are also unit tests, however they are specialized for verification of the communication of services. A successful contract test generates a json file (_this is called 'contract'_). Then I'm publishing the contract to an online pact broker (pactflow.up) for verification with the command that I entitled as `Publish Pact` above.

**Some key points**
---
- I was planning to implement an authentication service to reach the to-do items anywhere we want, however I had limited time. So, I decided to generate a unique ID for each user and then, I stored in localStorage. Thus, to-do items will persist every time a user connects from the same browser.
- I added some animations. For example when you click the add button (+) and input is empty, the input item will shake to indicate it's empty.
- I choose GitHub Actions for CI/CD after I tried Travis CI in backend. GitHub Actions seemed to me much simpler and easy to learn.
- App is deployed on Firebase Hosting.
- I tried to maintain TDD as much as possible.

-  [Backend GitHub](https://github.com/fatihy101/todos-api)


# Storyteq Frontend Challenge

## Assumptions

Here are some of the assumptions I made when solving the challenge:

- The styling of the page is not important. I focused on the functionality and making the required components look prettier, as requested.
- I can choose either Javascript or Typescript, since it was not specified in the challenge and Typescript is being used in the company, as it was mentioned in my second interview. Therefore I chose Typescript because of personal preference.
- In one of the requirements, it says `(It can show a prompt to type at least 3 characters)` and I assumed that this is optional. I decided to avoid such a prompt and show nothing instead, as I think it's expected.
- The assignment requires `at least 3 unit tests` and I tested two composables that I created for this solution. Instead, to add more coverage I implemented some component tests using Cypress to test some of my components.

## Considerations

Here are some of the considerations I made when solving the challenge and why I chose to implement them or not:

- I considered using `sass` for styling but decided to use `css` instead because the project is small and the styling is simple.
- I wanted to give my component a little more styling, that's why I'm using FontAwesome icons. I considered not doing this because I thought it was a little overkill to add the packages I added to add only one icon, but I went with it.
- I considered using [vue create](https://cli.vuejs.org/guide/creating-a-project.html), as suggested in the assigment, but that package is in Maintenance Mode. [The vue documentation suggests a different tool](https://vuejs.org/guide/scaling-up/tooling.html) for scaffolding and I used that one.
- I thought of using composition to structure my pinia stores, to be able to reuse parts of them but I thought it was a bit too much for this solution.

## Solution

The approach I took for solving the challenge was to create small components that I can reuse and combine to compose others.

For example, the `AutoCompleteInput` component is composed of `SearchInput` and `SuggestionsList` which could be used separately, if needed.

I aimed to keep my components as simple, lean and reusable as possible.

I chose to use some features from the `@vueuse/core` [package](https://vueuse.org/) to help me with some common tasks. It's also because of my personal taste and how I'm used to working with Vue these days.

To avoid limiting myself to doing unit testing with Jest, I also implemented some component tests using Cypress.

As I mentioned above, I implemented Typescript because of my personal preference, because there wasn't a required language in the assignment and like I also mentioned above about `@vueuse/core`, because of how I'm used to working these days.

## Project setup

The setup instructions are for a local development environment. I removed the command to build the project because I think it serves no purpose in this particular case.

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Run your unit tests
```
yarn test:unit
```

### Run component tests

#### Run Cypress tests in the command line.

```
yarn test:component:ci
```

#### Run Cypress tests using the UI.

```
yarn test:component:ui
```

### Lints and fixes files
```
yarn lint
```

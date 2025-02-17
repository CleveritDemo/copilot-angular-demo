# 💻 Copilot Angular Demo

In this demo project, we will explore how GitHub Copilot can facilitate web application development using the Angular framework.

The main objective will be to build a simple application that allows viewing a list of movies and their complete details.

Additionally, we will use GitHub Copilot to create a REST API using `json-server`, which will allow us to load data into the application as we progress through this practical exercise.

## ✅ Specific Objectives

- Configure the Development Environment

  1. Install dependencies
  2. Configure json-server as a mock REST API to provide test data to the application
  3. Integrate Angular Material to use its components and styles in the interface

- Create Angular Components

  1. Create a main component for the movie listing
  2. Develop a card component to display basic information for each movie
  3. Implement a movie details component that allows viewing complete information when selecting a movie from the list

- Use GitHub Copilot to Accelerate Development

  1. Take advantage of Copilot's suggestions for creating components and services
  2. Use Copilot to generate repetitive code and optimize development time

- Use Angular Material components like cards, chips and buttons to structure the interface

  1. Customize styles and colors for a coherent and visually appealing user experience

- Configure an Angular service to consume data from the mock REST API (json-server)
  1. Implement methods to list and select movies through this service
  2. Develop Navigation and Detail Features

Allow users to navigate from the general movie listing to the complete details of each one.
Configure routes in Angular to manage the movie listing and details views.
Perform Basic Testing and Validation.

![app demo](/assets/gif2.gif)

## 🛠 Requirements.

1. NodeJS v20.x - https://nodejs.org/en
2. Angular v18 - https://angular.dev/installation
3. Visual Studio Code
4. GitHub Copilot Extension for Visual Studio Code
5. Git
6. json-server
7. GitHub Copilot License

## 🚀 Hands On.

### 1. Clone the repository

To begin, we will clone the repository on our local machine. To do this, we execute the following command:

```bash
git clone https://github.com/CleveritDemo/copilot-angular-demo
```

Once the repository is cloned, we move into the project folder.

```bash
cd copilot-angular-demo
npm install
```

> **NOTE: Standalone Components**.
>
> Starting from Angular version 14, standalone components were introduced, and from Angular version 17, they remain as the default way to create components in Angular. This practical exercise is built using these components, instead of the traditional modules.

### 2. Incorporating Angular Material

At this point, we will ask Copilot how we can include Angular Material. We will formulate an appropriate prompt and provide it to the Chat.

**Prompt 1.**

```
@workspace How can I add the Angular Material component library to my Angular project?
```

**Expected response:**

- List of steps for installing Angular Material in the project.
- Ways to configure the library for style customization.

### 3. Building the main navigation bar

Having already installed the Angular Material library, we will ask GitHub Copilot to show us how to build a main navigation bar in the application's main component **app.component.html**

**Prompt 2.**

```shell
@workspace I want to build a navigation bar using the Angular Material Toolbar component. This component should display the title or name of my application on the left side, followed by three buttons that will implement routing functionality to other components not yet developed. These buttons are: Home, Contact, About us.
```

**Expected result**

- Generation of HTML template code for the navigation bar.
- Code logic for importing and configuring the Angular Material toolbar component.

### 4. Building main component: Home

At this point, with Copilot's help, we will build the entry component or initial view of the application called **Home**. For this, we will use the following prompt:

**Prompt 3.**

```
@workspace I want to generate a new Angular component called "Home" this component will show a CSS Grid layout where I can display "cards". Generate a dummy structure that can be modified later.
```

**Expected result**

- Indication of the Angular CLI command to generate the Home component.
- HTML template structure for the Home component.
- CSS structure for the Home component.
- TypeScript code logic for the Home component.
- Routing configuration for the `/home` and `/` routes.

### 5. Building Detail Component: MovieCard

The movie card component, as its name suggests, is a small card that will be based on the existing Card in the Angular Material library. Its functionality lies in that it will focus on showing basic information about a movie.

**Prompt 4.**

```
@workspace I want a component called MovieCard, this component should implement the Angular Material library importing the necessary elements to use Material Design Cards.
```

**Expected result**

- Indication of the Angular CLI command to generate the MovieCard component.
- HTML template structure for the MovieCard component.
- CSS structure for the MovieCard component.
- TypeScript code logic for the MovieCard component.
- Configuration of the component within the Home component.

### 6. Integration of HTTP requests and movie data

At this point, we will need a dataset that we can use as a source of information to load data into our web application. So far, there is no data to allow visualization of the components that have been built.

#### json-server configuration

In the repository, a file called **movies.db.json** has been loaded, which contains a JSON structure with movie information that we can use.

At this point, we will use the **json-server** tool to make this file simulate being a fully functional REST API for our application.

Let's use GitHub Copilot to find out how to install this tool.

**Prompt 5.**

```
How can I install and configure json-server to serve this file as an API #file:movies.db.json
```

**Expected result**

- Steps for installing and running the json-server tool using **npm**.

#### Configuration of Angular's HTTP provider

To make HTTP requests, Angular incorporates dedicated and optimized functions for this purpose. That's why we need to incorporate Angular's `provideHttpClient` to handle all communication with our REST API.

**Prompt 6.**

```
@workspace I need to implement the provideHttpClient provider in my application, can you tell me step by step what needs to be done to implement it?
```

**Expected result**

- Step by step instructions indicating the configuration of `provideHttpClient` within the Angular application's configuration file.

### 7. Interface Generation

To avoid handling a lot of variables, constants and properties, we will ask Copilot to build interfaces. These will allow us to homogenize the properties and the type of object that will be worked with throughout the application.

**Prompt 7.**

```
@workspace I want you to build an interface file based on the structure of the #file:movies.db.json file inside a directory called interfaces
```

**Expected result**

- An interface file will be generated containing the interfaces `Actor`, `MovieDetail` and `Movie` or interfaces with similar names.

### 8. Service Layer

To avoid having logic implemented directly in components, we can encapsulate all these operations in an Angular service. This service will be injected into components through the framework's automatic dependency injection, ensuring that methods and programming logic from a specific service can be accessed from multiple components.

**Prompt 8.**

```
@workspace I need you to build a service file called movie-service, this file should contain the necessary CRUD operations to manipulate the movie information. Don't use RxJS. Remember that we implemented an API using json-server whose URL is: http://localhost:3000/movies
```

**Expected result**

- A service file is generated containing the logic for CRUD operations through the REST API generated using json-server

> **NOTE: RxJS**
>
> The use of RxJS is specifically omitted, because this library is commonly used to handle data flow reactively in Angular, however, the use of RxJS is outside the scope of this practical exercise.

#### Implementation of the movies-service in the Home component

**Prompt 9.**

```
@workspace Implement the service #file:movie.service.ts in the component #file:home.component.ts. Here we need to specifically implement the method call to list all movies.
```

**Expected result**

- This prompt will generate the implementation structure of the `getMovies` method existing in the `movies.service`.

At this point, we can test the service using the `ng serve` command to run the web application in the browser and view the list of movies. In case of error, we will rely on GitHub Copilot to solve it.

### 9. Adjusting the Movies Card component

In this step, we will take as reference the main attributes found in each movie element in the **movies.db.json** file, which are: `thumbnail`, `name`, `year`, `score`, `genres`.

The goal is to use GitHub Copilot to improve the design of the card component, so that its appearance is enhanced and becomes much more visually attractive.

**Prompt 10.**

```
@workspace I need you to modify #file:home.component.html #file:movie-card.component.ts incorporating the parameters thumbnail, name, year, score and genres. Which exist in the interface #file:movie.ts. Also, I want you to split the genres string for each genre and use the Angular Material "Chips" component to represent each genre.
```

To reduce the number of parameters and attributes, we ask GitHub Copilot to implement the `Movie` interface as an input object for the MovieCard component. This way we only pass a single property instead of several.

**Prompt 11.**

```
@workspace Modify the component #file:movie-card.component.html #file:movie-card.component.ts so that instead of receiving parameter by parameter, it directly receives an object of type #file:movie.ts
```

We will ask Copilot again for help with some additional aesthetic adjustments, in this case, we will ask it to help us widen the columns and therefore the cards we have in our Home component.
**Prompt 12.**

```
@workspace How can I make my cards wider? #file:home.component.html #file:movie-card.component.html
```

**Expected result:**

- The cards component occupies a uniform and adapted space throughout the grid layout in the browser view.
- The component now directly receives a single parameter of type `Movie` instead of receiving multiple properties.

### 10. Generating detail component: Movie

We now need to generate a component that allows the visualization of movies with their complete details. That's why we'll ask GitHub Copilot to help us generate a component called MovieComponent.

This component should show all the information with the details of each movie. For this, we need to indicate to GitHub Copilot that we will use Angular Material and that it should generate a layout using the components.
**Prompt 13.**

```
@workspace I need you to build a new Angular component called Movie. This component aims to display the complete details of a movie, you should use the structure of the #file:movies.db.json file as a base for the properties you need to generate. Regarding the HTML layout, I would suggest generating a series of elements that include a thumbnail view on the left side of the component and all other attributes within a separate layout on the right side. This component will be subject to modifications that I will indicate later. This component will be loaded under a new route that has the following form: http://localhost:4200/movie/:id, so it is necessary to define a new route within the application for this component.
```

The next step, if not already suggested, is to indicate to GitHub Copilot that we need to redirect from the `MovieCard` component to the movie component when clicking on the "more info" button. So through a prompt we will ask to include this functionality.

```
@workspace I need you to include the code and logic necessary so that when clicking on the "more info" button in the #file:movie-card.component.html component, it redirects to the #file:movie.component.html component loading the complete details of the selected movie
```

#### Adjusting the component view

**Making the image occupy half of the component**:
We will have Copilot modify the image size for us by asking it to make the left half of the component be occupied by the movie poster image.

```
@workspace Modify the component #file:movie.component.html so that the movie image occupies the right size in terms of height of the available area in the browser, without losing the image proportion.
```

### 11. Top 3 Movies

At this point, we will ask GitHub Copilot to help us implement a component that shows the 3 highest rated movies in the application based on the score field.

**Prompt 14.**

```

@workspace I need you to build a new component called TopMovies, this component should display the 3 highest rated movies in the application based on the score field. This component should be visible in the #file:home.component.html component, the title of this section should be "Top 3 Movies" and should be centered
```

**Expected result:**

- Generation of a new component called `TopMovies`.
- Implementation of the logic to display the 3 highest rated movies in the application.
- Inclusion of the `TopMovies` component in the `Home` component.

### 12. Related movies by genre section in movie detail

At this point, we will ask GitHub Copilot to help us implement a component that shows movies related by genre in the detail view of the selected movie.

**Prompt 15.**

```

@workspace I need you to build a new component called RelatedMovies, this component should display movies related by genre in the detail view of the selected movie #file:movie.component.html This component should be shown in the #file:movie.component.html component. The title of the section should be "Movies related by genre" and should be centered
```

In case the movie the user is currently viewing appears in the related movies section, you can request help from Copilot

**Prompt 16.**

```
@workspace the related movies should not contain the movie the user is currently viewing
```

**Expected result:**

- Generation of a new component called `RelatedMovies`.
- Implementation of the logic to display genre-related movies in the selected movie's detail view.
- Inclusion of the `RelatedMovies` component in the `Movie` component.

### 13 Favorites Functionality

At this point, we will ask GitHub Copilot to help us implement functionality that allows marking a movie as a favorite.

**Prompt 17.**

```
@workspace I need you to build a new component called favorite-button, this component should for now display a button with a heart icon from Angular Material. This component should be shown in the #file:movie-card.component.html component
```

In case the buttons are not separated, we can ask Copilot for help.

**Prompt 18.**

```
Adjust the button styles in the component #file:movie-card.component.html, the more info button should be on the left and the favorite-button on the right
```

**Expected result:**

- Generation of a new component called `FavoriteButton`.

**Prompt 19.**

```
When clicking on the favorites button, I need the current movie to be added to a favorites list, this list should be stored in the browser's local storage, it should validate if the movie is already in the favorites list and if so, it should be removed from the list.
```

In case Copilot does not show an icon or color to indicate that the movie has been marked as a favorite, we can request help.

**Prompt 20.**

```
@workspace I need the favorites button to have the favorites icon when it is added as a favorite and the favorite_border icon when it is not
```

**Expected result:**

- Implementation of the logic to add and remove movies from the favorites list.
- Storage of the favorites list in the browser's local storage.
- Change of icon and color of the favorites button when adding or removing a movie from the list.

### 14. Proposed Challenges

At this point we have completed the practical exercise and seen how GitHub Copilot has helped us build a simple Angular application, however the range of functionalities that can be implemented can be expanded further. Below is a series of proposed challenges to be completed by the team in the remaining available time.

1. Implement a favorites component, which should display the movies marked as favorites in a list. This component should be accessed from a link in the main navigation bar.

2. Implement the rest of the CRUD operations: With Copilot's help, develop the logic and components needed to perform the loading, updating and deletion of movies within the application.

3. Implement filtering: Build a component that allows filtering the movie list based on certain categories such as `Year`, `Genre`, `Studio`, etc.

4. Implement unit tests for the services' functionalities and test that the methods work correctly.

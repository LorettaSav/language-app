# My Vocabulary App

Hi! This is my vocabulary trainer app. It is designed to store different kinds of German words so you can review them and play a game to test your memory. The app has three main components in the frontend: the **"Add a New Word"** component, the **"Review Your Words"** component, and the **"Play"** component. In the `App.jsx` file, there are three buttons with the names of the main components that allow the user to navigate to each of them. The main components are stored in a folder called `pages`.

## Frontend Components

### Add Component

In this component, there is a title that prompts the user to select the type of word they want to add. It includes three buttons with the names of the three categories: **"Nouns"**, **"Adjectives"**, **"Verbs"**, and **"Expressions"**. Each category has a customized table in the database called `myapp` to store relevant information for each word. The form includes input fields for each table row (excluding the ID and primary key), allowing the user to enter the information such as meanings and examples. At the end, there is a submit button. I have also created three components to handle the information for each category, and they are stored in a folder called `AddComponents`. Here is the structure of the table used for each category:

#### Nouns:

| Column     | Type                     |
|------------|--------------------------|
| id         | INT NOT NULL AUTO_INCREMENT |
| noun       | VARCHAR(255)             |
| meaning1   | VARCHAR(255)             |
| meaning2   | VARCHAR(255)             |
| meaning3   | VARCHAR(255)             |
| article    | VARCHAR(255)             |
| preposition| VARCHAR(255)             |
| plural     | VARCHAR(255)             |
| example1   | VARCHAR(255)             |
| example2   | VARCHAR(255)             |
| example3   | VARCHAR(255)             |
| PRIMARY KEY| id                       |

#### Adjectives:

| Column     | Type                     |
|------------|--------------------------|
| id         | INT NOT NULL AUTO_INCREMENT |
| adjective  | VARCHAR(255)             |
| meaning1   | VARCHAR(255)             |
| meaning2   | VARCHAR(255)             |
| meaning3   | VARCHAR(255)             |
| example1   | VARCHAR(255)             |
| example2   | VARCHAR(255)             |
| example3   | VARCHAR(255)             |
| PRIMARY KEY| id                       |

#### Verbs:

| Column     | Type                     |
|------------|--------------------------|
| id         | INT NOT NULL AUTO_INCREMENT |
| verb       | VARCHAR(255)             |
| meaning1   | VARCHAR(255)             |
| meaning2   | VARCHAR(255)             |
| meaning3   | VARCHAR(255)             |
| cases      | VARCHAR(255)             |
| preposition| VARCHAR(255)             |
| example1   | VARCHAR(255)             |
| example2   | VARCHAR(255)             |
| example3   | VARCHAR(255)             |
| PRIMARY KEY| id                       |

#### Expressions:

| Column     | Type                     |
|------------|--------------------------|
| id         | INT NOT NULL AUTO_INCREMENT |
| expression | VARCHAR(255)             |
| meaning1   | VARCHAR(255)             |
| meaning2   | VARCHAR(255)             |
| meaning3   | VARCHAR(255)             |
| example1   | VARCHAR(255)             |
| example2   | VARCHAR(255)             |
| example3   | VARCHAR(255)             |
| PRIMARY KEY| id                       |

### Review Component

This component displays four buttons, one for each category. When clicked, each button displays a card with the information of the submitted words. Each card includes a delete button to remove the word from the database.

### Play Component

In this component, a random word from any of the four tables is selected. A question is displayed, asking the user to enter the values for each row saved in the table for that word. First, the user is asked for the meaning of the word. If the answer is incorrect, a message will be displayed indicating the correct answer. If the answer is correct, the next question for the respective category will be displayed. If an input was left blank, the corresponding question will not be displayed. When all questions have been answered correctly, a congratulations message is displayed along with the examples of the word that were previously saved. Additionally, a button is provided to get the next word.

## Backend Components

### Routes

In this folder, there are five files. Four of them correspond to the four categories of words and are named accordingly. Each file contains four functions that perform the following actions:

1. Get all words from the respective table.
2. Select a single word from the table by its ID.
3. Insert a new word into the table.
4. Delete a word from the table by its ID.

The fifth file, `index.js`, contains the function to retrieve a random word from any of the tables, which is used in the play component.

### Guards

In this file, there are four files named `nounMustExist`, `adjectiveMustExist`, `verbMustExist`, and `expressionMustExist`. Each file contains a function that checks if the element in the respective table with the given ID exists. This check is performed before executing functions to get or delete a word. If the element doesn't exist, a message stating that the element was not found will be sent, and the functions will not be executed.

## Excercise 0.4
### Diagram depicting the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.

```mermaid
sequenceDiagram
  participant User
  participant Browser
  participant Server
  User->>+Browser: Opens https://studies.cs.helsinki.fi/exampleapp/notes
  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  Server-->>-Browser: HTML code
  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  Server-->>-Browser: main.css
  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  Server-->>-Browser: main.js
  Browser->>Browser: Renders the page
  User->>+Browser: Writes a new note
  Browser->>Browser: Updates the note text field
  User->>+Browser: Clicks the submit button
  Browser->>+Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  Server-->>-Browser: Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  Server-->>-Browser: Updated notes HTML code
  Browser->>Browser: Renders the updated notes page

```

## Excercise 0.5
### Diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa

```mermaid
sequenceDiagram
  participant User
  participant Browser
  participant Server
  User->>+Browser: Opens https://studies.cs.helsinki.fi/exampleapp/spa
  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
  Server-->>-Browser: HTML code
  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  Server-->>-Browser: main.css
  Browser->>+Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  Server-->>-Browser: spa.js
  Browser->>Browser: Renders the single-page app
  User->>+Browser: Writes a new note
  Browser->>Browser: Updates the note text field
  User->>+Browser: Clicks the submit button
  Browser->>+Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  Server-->>-Browser: OK
  Browser->>Browser: Updates the notes list

```

## Excercise 0.6
### Diagram depicting the situation where the user creates a new note using the single-page version of the app.

```mermaid
sequenceDiagram
  participant User
  participant Browser
  participant Server
  User->>+Browser: Opens https://fullstackopen.com/en/part0/fundamentals_of_web_apps#single-page-app
  Browser->>Browser: Renders the single-page app
  User->>+Browser: Writes a new note
  Browser->>Browser: Updates the note text field
  User->>+Browser: Clicks the submit button
  Browser->>+Server: POST https://fullstackopen.com/en/part0/fundamentals_of_web_apps/new_note_spa
  Server-->>-Browser: OK
  Browser->>Browser: Updates the notes list with the new note

```


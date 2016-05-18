| Method | URI Path     | Status Code | Description |
|--------|--------------|-------------|-------------|
| GET    | /notes       |   200       | Gets all notes|
| GET    | /notes/:id   |   200       | Gets a note with the given :id |
| POST   | /notes       |   201       | Creates a new note with the given BODY |
| PUT    | /notes/:id   |   201       | Updates the note with the given :id with the BODY content |
| DELETE | /notes/:id   |   200       | Deletes the note with the given :id  |




## POST /notes

The body content is a JSON object with the following format:

{
    "title": "Note1",
    "content": "Note 1 content",
    "tags": ["tag1", "tag2", "tag3"],
    "relevance": 2
}

The title and content properties are mandatory. All other are optional.


## PUT /notes/:id

The body content is a JSON object with full note content:

{
    "title": "Note1",
    "content": "Note 1 content",
    "tags": ["tag1", "tag2", "tag3"],
    "relevance": 2
}

The title and content properties are mandatory. All other are optional.

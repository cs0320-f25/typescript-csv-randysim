# Sprint 1: TypeScript CSV

### Task B: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
  - Functionality
    - Having fields with commas inside of them
    - Some CSVs may be comma separated and others may be comma + whitespace seperated. Should we trim off leading and trailing whitespace between the columns?
    - What about single quotes, should they be treated like double quotes?
    - What if two contiguous columns end in a double quote? ex: hello",bye"
    - What if the quote doesn't have a closing quote. Should that be allowed or should quotes be a special character that is used to identify a string.
    - Do all rows need to have the same number of columns?

  - Extensibility
    - Escape characters so we can write special characters like quotes without triggering unintended consequences.
    - Throw an error when CSV is in an invalid format.
    - Allow users to specify if the first row is a header.
    - Allow users to stream the CSV in case the file is really big and it can't all be loaded into memory.
- #### Step 2: Use an LLM to help expand your perspective.
  - Should Handle
    - Quotes within fields: a,b"c"d,e should parse as ["a", 'b"c"d', "e"]
    - Unmatched quotes: a,"bc"d,e where quotes don't properly wrap the entire field
    - Escaped quotes: "He said ""Hello""",world should parse as ['He said "Hello"', "world"]
    - Fields containing delimiters: "Smith, John",25,Engineer where commas appear inside quoted fields
  - Data Consistency Problems
    - Inconsistent column counts: Some rows having more/fewer columns than the header
    - Empty lines: How to handle blank rows within the data
    - Trailing commas: Lines ending with extra delimiters
    - Leading/trailing whitespace: Spaces around field values that may need trimming
    - Character Encoding and Special Characters
  - UTF-8 BOM handling: Files that start with byte-order marks
  - Non-ASCII characters: Ensuring proper encoding support
  - Line ending variations: Handling \n, \r\n, and \r consistently
  - Null values: Distinguishing between empty strings and actual null values
- Essential Feature Improvements
  - Performance and Memory Optimization
    - Streaming support: Instead of loading entire files into memory, process data in chunks
    - Lazy loading: Parse rows on-demand rather than all at once
  - Developer Experience Enhancements
    - Type inference: Automatically detect column data types (numbers, dates, booleans)
    - Schema validation: Allow developers to specify expected column types and validate against them
    - Detailed error reporting: Provide line numbers, column positions, and specific error descriptions

  - #### Note:
    - The AI was quite effective in making suggestions. Not only was there significant overlap, but it thought of way more scenarios than I could have.
    - I modified the prompt to 1) Make the list more comprehensive in which it brought more use cases such as async, streaming, memory efficiency in large datasets and 2) Make it more simple, where it only gave me the core features such as delimeters, data type, 

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

- Top 4 Enhancements
  - 1) As a user, I can use quotes within my fields in any manner. However, I can also define a field by wrapping quotes around it so that I can include delimeters in my field.
  - 2) As a user, I would want leading and trailing whitespaces deleted for each column.
  - 3) As a user, I would want the CSV parser to support line endings like \r\n or \n to support multiple operating systems.
  - 4) As a user, I would want to be able to use streams on the CSV data and process it in chunks instead of loading it all at once so I can process big files without running out of memory.
  - I initially came up with handling and escaping quotes, handling commas inside of fields, handling whitespaces, streaming, column count, error handling, and headers. The LLM suggested all of that but more. The big ideas resonated with me, but I feel like it just brain dumped all its ideas all at once. In a real setting, I feel like this would be overwhelming for a team working on a product. 

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:

- parseCSV outputs an array given no schema.
- parseCSV outputs only arrays given no schema.
- parseCSV handles commas in quotes.
- parseCSV handles empty items.
- parseCSV handles a valid zod schema.
- parseCSV handles an invalid zod schema by throwing an error.

#### How To…

#### Team members and contributions (include cs logins):

rsim2 - solo sprint

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):

I used github copilot to complete Step 2 (expanding my perspective), and to help me figure out how to have my function signature's return type reflect what was given in the parameter (conditionally). The chats are in chats/

#### Total estimated time it took to complete project:

6 hours

#### Link to GitHub Repo:  

https://github.com/cs0320-f25/typescript-csv-randysim

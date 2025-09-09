# Sprint 1: TypeScript CSV

### Task B: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

Functionality
- Having fields with commas inside of them
- Some CSVs may be comma separated and others may be comma + whitespace seperated. Should we trim off leading and trailing whitespace between the columns?
- What about single quotes, should they be treated like double quotes?
- What if two contiguous columns end in a double quote? ex: hello",bye"
- What if the quote doesn't have a closing quote. Should that be allowed or should quotes be a special character that is used to identify a string.
- Do all rows need to have the same number of columns?

Extensibility
- Escape characters so we can write special characters like quotes without triggering unintended consequences.
- Throw an error when CSV is in an invalid format.
- Allow users to specify if the first row is a header.
- Allow users to stream the CSV in case the file is really big and it can't all be loaded into memory.

- #### Step 2: Use an LLM to help expand your perspective.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  

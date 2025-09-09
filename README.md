# Sprint 1: TypeScript CSV

### Task B: Proposing Enhancement

- #### Step 1: Brainstorm on your own.

Functionality
    - Having fields with commas inside of them
    
    - Some CSVs may be comma separated and others may be comma
     + whitespace seperated. Should we trim off leading and trailing whitespace between the columns?

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

Should Handle

- Quotes within fields: a,b"c"d,e should parse as ["a", 'b"c"d', "e"]

- Unmatched quotes: a,"bc"d,e where quotes don't properly wrap the entire field

- Escaped quotes: "He said ""Hello""",world should parse as ['He said "Hello"', "world"]

- Fields containing delimiters: "Smith, John",25,Engineer where commas appear inside quoted fields

Data Consistency Problems

- Inconsistent column counts: Some rows having more/fewer columns than the header

- Empty lines: How to handle blank rows within the data

- Trailing commas: Lines ending with extra delimiters

- Leading/trailing whitespace: Spaces around field values that may need trimming

Character Encoding and Special Characters

- UTF-8 BOM handling: Files that start with byte-order marks

- Non-ASCII characters: Ensuring proper encoding support

- Line ending variations: Handling \n, \r\n, and \r consistently

- Null values: Distinguishing between empty strings and actual null values

Essential Feature Improvements

Performance and Memory Optimization

- Streaming support: Instead of loading entire files into memory, process data in chunks

- Lazy loading: Parse rows on-demand rather than all at once

- Progress callbacks: Allow developers to show progress bars for large files

- Memory-efficient processing: Avoid creating unnecessary temporary objects
Developer Experience Enhancements

    Type inference: Automatically detect column data types (numbers, dates, booleans)

Schema validation: Allow developers to specify expected column types and validate against them

Detailed error reporting: Provide line numbers, column positions, and specific error descriptions

Configurable options:

        Custom delimiters (comma, semicolon, tab, pipe)

        Custom quote characters

        Header row detection/skipping

        Case-sensitive column matching

Flexible Input/Output Options

    Multiple input sources: Support strings, streams, URLs, and file paths

    Output format options:

        Array of objects with typed properties

        Array of arrays for raw data

        Iterator/generator for memory efficiency

        Map objects for key-based access

    Transformation hooks: Allow custom field transformation during parsing

Error Handling Strategies

Provide configurable behaviors for common issues:

    Malformed rows: Skip, throw exception, or return with error flag

    Type conversion failures: Replace with null, use default values, or fail

    Missing columns: Pad with nulls or throw errors

    Duplicate headers: Rename or throw exceptions

Advanced Features for Production Use

    Multi-file processing: Parse multiple CSV files with consistent schemas

    Metadata extraction: File information, parsing statistics, data quality metrics

    Resume capability: Continue parsing from a specific row after errors

    Async/Promise support: Non-blocking parsing for large files

    Web worker support: Offload parsing to prevent UI blocking in browsers

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

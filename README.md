[Introducing **JSON** (JavaScript Object Notation)](https://www.json.org/json-en.html)

This is the JSON grammar in McKeeman Form.
```planetext
json
    element

value
    object
    array
    string
    number
    "true"
    "false"
    "null"

object
    '{' ws '}'
    '{' members '}'

members
    member
    member ',' members

member
    ws string ws ':' element

array
    '[' ws ']'
    '[' elements ']'

elements
    element
    element ',' elements

element
    ws value ws

string
    '"' characters '"'

characters
    ""
    character characters

character
    '0020' . '10FFFF' - '"' - '\'
    '\' escape

escape
    '"'
    '\'
    '/'
    'b'
    'f'
    'n'
    'r'
    't'
    'u' hex hex hex hex

hex
    digit
    'A' . 'F'
    'a' . 'f'

number
    integer fraction exponent

integer
    digit
    onenine digits
    '-' digit
    '-' onenine digits

digits
    digit
    digit digits

digit
    '0'
    onenine

onenine
    '1' . '9'

fraction
    ""
    '.' digits

exponent
    ""
    'E' sign digits
    'e' sign digits

sign
    ""
    '+'
    '-'

ws
    ""
    '0020' ws
    '000A' ws
    '000D' ws
    '0009' ws
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

Static Methods 
JSON.isRawJSON()
JSON.parse()
JSON.rawJSON()
JSON.stringify()



In JSON, the top-level structure must be a single valid JSON value, and the most common top-level values are:

an object (wrapped in {}), or

an array (wrapped in []).

INVALID: 
{ "a": 1 }
{ "b": 2 }

Valid alternatives:
1. Wrap both objects in an array:
json
Copy code
[
  { "a": 1 },
  { "b": 2 }
]
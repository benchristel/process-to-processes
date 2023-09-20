import {test, expect, is, debug, getAllTests, runTests, formatTestResultsAsText} from "@benchristel/taste"

// function firstQuotedString(input) {
//   return firstMatch(/"(\\.|[^\\"])*"/, input)
// }

// function firstMatch(regex, string) {
//   return string.match(regex)?.[0]
// }

// function firstQuotedString(input) {
//   let result = undefined
//   for (let i = 0; i < input.length; i++) {
//     if (!result) {
//       if (input[i] === '"') {
//         result = '"'
//       }
//     } else {
//       if (input[i] === '"') {
//         return result + '"'
//       } else if (input[i] === "\\") {
//         result += input[i] + input[i + 1]
//         i++
//       } else {
//         result += input[i]
//       }
//     }
//   }
// }

function firstQuotedString(inputString) {
  const input = new Reader(inputString)
  const result = new Writer()
  const parser = new Parser(input, result)
  while(input.hasNext() && !parser.parseQuote()) {
    input.read()
  }
  while (input.hasNext() && parser.parseStringCharacter()) {}
  if (parser.parseQuote()) {
    return result.string()
  }
}

class Reader {
  constructor(input) {
    this.input = input
    this.nextIndex = 0
  }

  read() {
    return this.input[this.nextIndex++]
  }

  hasNext() {
    return this.nextIndex < this.input.length
  }

  nextIs(character) {
    return this.input[this.nextIndex] === character
  }
}

class Writer {
  constructor() {
    this.output = ""
  }

  write(string) {
    this.output += string
  }

  string() {
    return this.output
  }
}

class Parser {
  constructor(input, output) {
    this.input = input
    this.output = output
  }

  parseQuote() {
    if (this.input.nextIs('"')) {
      this.output.write(this.input.read())
      return true
    } else {
      return false
    }
  }

  parseStringCharacter() {
    if (this.input.nextIs('"')) {
      return false
    }
    let character = this.input.read()
    if (character === "\\") {
      character += this.input.read()
    }
    this.output.write(character)
    return true
  }
}

// function firstQuotedString(input) {
//   const startIndex = input.indexOf('"')
//   if (startIndex === -1) {
//     return undefined
//   }
//   let scanIndex = startIndex
//   let endIndex = 0
//   while (endIndex !== -1) {
//     endIndex = input.indexOf('"', scanIndex + 1)
//     if (endIndex === -1) {
//       return undefined
//     }
//     let backslashCount = 0
//     for (let i = endIndex - 1; i > 0; i--) {
//       if (input[i] === "\\") {
//         backslashCount++
//       } else {
//         break;
//       }
//     }
//     if (backslashCount % 2 === 0) {
//       return input.slice(startIndex, endIndex + 1)
//     } else {
//       scanIndex = endIndex
//     }
//   }
// }

test("firstQuotedString", {
  "returns undefined given empty string"() {
    expect(firstQuotedString(""), is, undefined)
  },

  "finds an empty JSON string"() {
    expect(firstQuotedString('""'), is, '""')
  },

  "finds a JSON string in an object"() {
    expect(firstQuotedString('{foo: ""}'), is, '""')
  },

  "finds a nonempty JSON string"() {
    expect(firstQuotedString('"a"'), is, '"a"')
  },

  "finds the first of two JSON strings"() {
    expect(firstQuotedString('["a", "b"]'), is, '"a"')
  },

  "finds a string with an escaped quote"() {
    expect(firstQuotedString('["a\\"b"]'), is, '"a\\"b"')
  },

  "finds a string with multiple escaped quotes"() {
    expect(firstQuotedString('["a\\"\\""]'), is, '"a\\"\\""')
  },

  "finds a string with an escaped backslash"() {
    expect(firstQuotedString('["a\\\\b"]'), is, '"a\\\\b"')
  },

  "finds a string with an escaped backslash at the end"() {
    expect(firstQuotedString('["a\\\\", "b"]'), is, '"a\\\\"')
  },

  "does not find an unterminated string"() {
    expect(firstQuotedString('"'), is, undefined)
  },

  "does not find an unterminated string with the closing quote escaped"() {
    expect(firstQuotedString('["\\"]'), is, undefined)
  }
})

runTests(getAllTests()).then(formatTestResultsAsText).then(console.log)
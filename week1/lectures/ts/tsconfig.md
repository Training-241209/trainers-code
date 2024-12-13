# Ts Config
A `tsconfig.json` file indicates the root file and directory of a TypeScript project. It also sets the options used to compile the project.

If input files are specified when compiling, often for debugging, then the tsconfig.json file is ignored

The compiler can be invoked without specifying input files
In such a case there are two possibilities:
 
1. By invoking `tsc` with no input files, in which case the compiler searches for the `tsconfig.json` file starting in the current directory and continuing up the parent directory chain.  
2. By invoking `tsc` with no input files and a `--project` (or just `-p`) command-line option that specifies the path of a directory containing a `tsconfig.json` file, or a path to a valid `.json` file containing the configurations.  
 
# Root Fields
The root fields determine how the project is set up and include `files`, `exclude`, `include`, `extends`, and `reference`

**`files`**  
Specifies an allowlist of files to include in the program. An error occurs if any of the files can’t be found.  
This is useful when you only have a small number of files and don’t need to use a glob to reference many files. If you need that, then use `include`.  

**`extends`**  
The value of `extends` is a string which contains a path to another configuration file to inherit from. The path may use Node.js style resolution.  
The configuration from the base file is loaded first, then overridden by those in the inheriting config file. All relative paths found in the configuration file will be resolved relative to the configuration file they originated in.  
It’s worth noting that `files`, `include`, and `exclude` from the inheriting config file overwrite those from the base config file, and that circularity between configuration files is not allowed.  
Currently, the only top-level property that is excluded from inheritance is `references`.  
The base files can be found at [https://github.com/tsconfig/bases/](https://github.com/tsconfig/bases/)

**`include`**  
Specifies an array of filenames or patterns to include in the program. These filenames are resolved relative to the directory containing the `tsconfig.json` file.  
`include` and `exclude` support wildcard characters to make glob patterns:
- `*` matches zero or more characters (excluding directory separators)
- `?` matches any one character (excluding directory separators)
- `**/` matches any directory nested to any level

If the last path segment in a pattern does not contain a file extension or wildcard character, then it is treated as a directory, and files with supported extensions inside that directory are included.  

**`exclude`**  
Specifies an array of filenames or patterns that should be skipped when resolving `include`.  
Important: `exclude` only changes which files are included as a result of the `include` setting. A file specified by `exclude` can still become part of your codebase due to an import statement in your code, a types inclusion, a `/// <reference>` directive, or being specified in the `files` list.  
It is not a mechanism that prevents a file from being included in the codebase – it simply changes what the `include` setting finds.  

**`references`**  
Project references are a way to structure your TypeScript programs into smaller pieces. Using Project References can greatly improve build and editor interaction times, enforce logical separation between components, and organize your code in new and improved ways.  
You can read more about how references work in the Project References section of the handbook:
[https://www.typescriptlang.org/docs/handbook/project-references.html](https://www.typescriptlang.org/docs/handbook/project-references.html)

# Example `tsconfig.json` File

Here's an example of a `tsconfig.json` file that uses both the `files` property and the `include`/`exclude` properties:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "../../built/local/tsc.js",
    "sourceMap": true
  },
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ],
  "include": ["src/**/*"],
  "exclude": ["**/*.spec.ts"]
}
```
# Compiler Options
These are more extensive, providing for a great degree of TypeScript configuration and determine how the language works.
If nothing is specified then the default options will be used.
More information and documentation for the options can be found in the handbook:
[https://www.typescriptlang.org/tsconfig/](https://www.typescriptlang.org/tsconfig/)

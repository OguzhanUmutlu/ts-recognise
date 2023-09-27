const ts = require("typescript");
const fs = require("fs");

const pt = process.argv[2];
fs.writeFileSync(process.argv[3], ts.transpileModule(fs.readFileSync(pt).toString(), {
 compilerOptions: {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.ES2022
  }
}).outputText);
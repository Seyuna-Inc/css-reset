import pkg from "../deno.json" with { type: "json" };
import * as sass from "sass"

/**
 * Compile sass
 * 
 * @returns void
 */
const compile = async (): Promise<void> => {
    try {
        // Get source file content
        const source = await Deno.readTextFile("./src/reset.scss");

        // Replace version variable with current version
        const scss = source.replace("{version}", pkg.version)

        // Compile CSS
        const css = await sass.compileStringAsync(scss)

        // Create dist directory if it doesn't exist
        await Deno.mkdir("dist", { recursive: true });

        // Write compiled scss & css files
        await Deno.writeTextFile("./dist/reset.scss", scss);
        await Deno.writeTextFile("./dist/reset.css", css.css);

        // Write compiled ts file
        await Deno.writeTextFile("./dist/reset.ts", "export default `" + css.css + "`;");
    } catch(err) {
        console.log(err)
    }
}

export default compile
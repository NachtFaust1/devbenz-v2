import { NextResponse } from "next/server";
export async function GET() {

    return NextResponse.json({ data: [
        [ "JavaScript", "javascript.svg" ],
        [ "TypeScript", "typescript.png" ],
        [ "React", "react.svg" ],
        [ "Next.js", "next.svg" ],
        [ "CSS", "css.svg" ],
        [ "HTML", "html.svg" ],
        [ "Express.js", "express.svg" ],
        [ "Font Awesome", "fontawesome.png" ],
        [ "Git", "git.svg" ],
        [ "GitHub", "github.svg" ],
        [ "HeadlessUI", "headless.png" ],
        [ "MongoDB", "mongo.svg" ],
        [ "Node.js", "node.svg" ],
        [ "TailwindCSS", "tailwind.svg" ],
        [ "Vercel", "vercel.svg" ],
    ] })
};
import config from "../../../website.config";
import { NextResponse } from "next/server";

export async function GET() {
    const _ = await (await fetch('https://api.github.com/users/' + config.githubName + '/repos', {
        headers: {
            Authorization: 'token ' + config.githubKey
        },
        next: { revalidate: 60 },
    })).json();

    return NextResponse.json({ data: _ })
}
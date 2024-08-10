// app/api/log-mint/route.js
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Path to the selected mints log file
const selectedMintsFilePath = path.join(process.cwd(), 'app/util/selectedMints.json');

export async function POST(req) {
    const mint = await req.json();

    // Load selected mints
    let selectedMints = [];
    if (fs.existsSync(selectedMintsFilePath)) {
        const selectedMintsData = fs.readFileSync(selectedMintsFilePath);
        selectedMints = JSON.parse(selectedMintsData);
    }

    // Add the successfully minted NFT to the selected mints list
    selectedMints.push(mint);

    // Write the updated selected mints back to the file
    fs.writeFileSync(selectedMintsFilePath, JSON.stringify(selectedMints, null, 2));

    return NextResponse.json({ message: "Mint logged successfully." });
}

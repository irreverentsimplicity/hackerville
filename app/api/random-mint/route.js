// app/api/random-mint/route.js
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

// Path to the selected mints log file
const selectedMintsFilePath = path.join(process.cwd(), 'app/util/selectedMints.json');

export async function GET() {
    const mintDir = path.join(process.cwd(), 'app/util/mints');
    const mintFiles = fs.readdirSync(mintDir);

    let allMints = [];

    // Load all mint entries
    for (const file of mintFiles) {
        if (file.startsWith('mint') && file.endsWith('.js')) {
            const mint = (await import(`../../util/mints/${file}`)).default;
            allMints = allMints.concat(mint);
        }
    }

    // Load selected mints
    let selectedMints = [];
    if (fs.existsSync(selectedMintsFilePath)) {
        const selectedMintsData = fs.readFileSync(selectedMintsFilePath);
        selectedMints = JSON.parse(selectedMintsData);
    }

    // Filter out selected mints
    // Filter out selected mints
    const availableMints = allMints.filter(mint => 
        !selectedMints.some(selected => 
            selected.airdropParentID === mint.airdropParentID &&
            selected.airdropXPos === mint.airdropXPos &&
            selected.airdropYPos === mint.airdropYPos
        )
    );

    // If no more available mints, reset the selected mints list
    if (availableMints.length === 0) {
        return NextResponse.json({ message: "No more mints available." }, { status: 200 });
    }

    // Select a random mint
    const randomMint = availableMints[Math.floor(Math.random() * availableMints.length)];

    // Log the selected mint
    selectedMints.push(randomMint);
    fs.writeFileSync(selectedMintsFilePath, JSON.stringify(selectedMints, null, 2));

    return NextResponse.json(randomMint);
}

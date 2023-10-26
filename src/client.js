import fs from 'fs/promises';
import { DateTime } from 'luxon';

function getTimestampedLogEntry(data) {
    const timestamp = DateTime.now().toFormat('yyyy-LL-dd HH:mm:ss');
    return `[${timestamp}] ${data}`;
}

function getConnectedLogEntry(ipAddress) {
    return getTimestampedLogEntry(`Connected. My IP address is ${ipAddress}`);
}

function getDisconnectedLogEntry() {
    return getTimestampedLogEntry('Disconnected');
}

async function appendLineToLog(line) {
    await fs.appendFile(process.env.CONNECTION_LOG_FILE_PATH, `${line}\n`);
}

async function main() {
    try {
        const response = await fetch(process.env.SERVER_URL);
        const ipAddress = await response.text();
        await appendLineToLog(getConnectedLogEntry(ipAddress));
    } catch {
        await appendLineToLog(getDisconnectedLogEntry());
    }
}

await main();

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

// Path to log file
const logFile = path.join(__dirname, 'attendance.log');

function log(message) {
  const now = new Date().toLocaleString();
  const fullMessage = `[${now}] ${message}\n`;

  // Show on console
  console.log(fullMessage);

  // Append to file
  fs.appendFileSync(logFile, fullMessage);
}

function fetchAttendance() {
  log("Fetching today's attendance...");
}

// Run every 1 minute
cron.schedule('* * * * *', fetchAttendance);

log(' Attendance fetcher started...');

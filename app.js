if (!process.env.DB_URL) {
  console.error("DB_URL not defined!");
  process.exit(1);
}

console.log("Application started");
console.log("changing the application code");
console.log("second time changing application code");
console.log("DB_URL:", process.env.DB_URL);
console.log("ENV:", process.env.APP_ENV);

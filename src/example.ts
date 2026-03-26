import logger from "../logging/Logger";
import dotenv from "dotenv";

function checkLogger(): void {
    logger.debug("dir is", __dirname);
    logger.info("This works!");
}

function checkDotEnv(): void {
    const { DB_CONNECTION_STRING, JWT_SECRET, LOG_LEVEL, PORT } = process.env;
    logger.debug("env vars from example:\n", [
        DB_CONNECTION_STRING,
        JWT_SECRET,
        LOG_LEVEL,
        PORT,
    ]);
}

function main() {
    checkLogger();
    checkDotEnv();
}

dotenv.config({
    debug: true,
    path: __dirname + "/./../.env." + process.env.NODE_ENV,
});
main();

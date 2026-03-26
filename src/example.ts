import logger from "../logging/Logger";

function main() {
    logger.info("This works!");
    logger.debug("env vars from example:\n", process.env);
}

main();

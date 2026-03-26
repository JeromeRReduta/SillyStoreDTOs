import dotenv from "dotenv";

export interface Configs {
    readonly env: "development" | "production" | "test" | "example";
    readonly port: number;
    readonly db: {
        readonly connectionString: string;
    };
    readonly jwt: {
        readonly secret: string;
    };
    readonly logging: {
        readonly level: number;
    };
}

dotenv.config({
    debug: true,
    path: __dirname + "/./../.env." + process.env.NODE_ENV,
});

/** Note - if .env files/configs are improperly set, this SHOULD crash */
const configs: Configs = {
    env: process.env.NODE_ENV,
    port: parseInt(process.env.PORT),
    db: {
        connectionString: process.env.DATABASE_URL,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    logging: {
        level: Number.parseInt(process.env.LOG_LEVEL),
    },
};

export default configs;

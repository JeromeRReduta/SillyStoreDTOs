import LoginRequest from "./LoginRequest";

export default interface RegisterRequest extends LoginRequest {
    readonly email: string;
}

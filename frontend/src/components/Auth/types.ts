export interface isAuthProps {
    isRegistration?: boolean;
}

export interface ISuccessAuth {
    message: string;
    token: string;
}

export interface IErrorAuth {
    message: string;
    error: string;
}
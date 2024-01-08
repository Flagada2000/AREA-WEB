export interface User {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: string;
    phone: string;
    confirmed_at: string;
    last_sign_in_at: string;
    app_metadata: {
        provider: string;
        providers: string[];
    };
    user_metadata: Record<string, any>;
    identities: Identity[];
    created_at: string;
    updated_at: string;
}

export interface UserProfile {
    avatar_url: string;
}

interface Identity {
    identity_id: string;
    id: string;
    user_id: string;
    identity_data: {
        email: string;
        email_verified: boolean;
        phone_verified: boolean;
        sub: string;
    };
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
    email: string;
}

interface Session {
    access_token: string;
    token_type: string;
    expires_in: number;
    expires_at: number;
    refresh_token: string;
    user: User;
}

export interface SignResponse {
    user: User;
    session: Session;
    user_profile: UserProfile;
}

export interface Action {
    id: number;
    service_id: number;
    action_name: string;
    action_desc: string;
}

export interface Reaction {
    id: number;
    service_id: number;
    reaction_name: string;
    reaction_desc: string;
}

export interface UserAction {
    id: number;
    user_id: string;
    action_id: number;
    action_config: string;
}

export interface Service {
    id: number;
    service_name: string;
    img_url: string;
    icon_url: string;
    actions: Action[];
}

export interface ActionUserInfo {
    id: number;
    action_id: number;
    action_config: string;
    action: Action;
    service: Service;
}

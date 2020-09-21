export interface user {
  id: string | undefined;
  displayName: string | null | undefined;
  email: string | null | undefined;
  photoUrl: string | null | undefined;
  token: string | undefined;
}

export interface usersReducerState {
  data: user[];
  authenticated: Boolean;
  loading: Boolean;
}

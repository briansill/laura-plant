import { useAuth } from "react-oidc-context";

function Login() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "42lnlnu6nfp2fnnbt3ptv9dsat";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://us-east-2qavdfmx5r.auth.us-east-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        {auth.user?.profile.email}
        {/* <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre> */}

        <div>
        <button onClick={() => auth.removeUser()} className="btn btn-secondary">Sign out</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()} className="btn btn-primary">Sign in</button>
      {/* <button onClick={() => signOutRedirect()} className="btn btn-secondary">Sign out</button> */}
    </div>
  );
}

export default Login;
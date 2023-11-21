import { useUserAuth } from "./_utils/auth-context";    

const Page = () => {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    const handleLogin = () => {
        gitHubSignIn();
    };
    const handleLogout = () => {
        firebaseSignOut();
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
          {user ? (
            <div>
              <p>
                Welcome, {user.displayName} ({user.email})
              </p>
              <button onClick={handleLogout} style={{ margin: "10px" }}>Logout</button>
              <a href="/shopping-list" style={{ textDecoration: "none", color: "blue" }}>Go to Shopping List</a>
            </div>
          ) : (
            <button onClick={handleLogin} style={{ margin: "10px" }}>Login with GitHub</button>
          )}
        </div>
      );
};

export default Page;
export default ({isLogged=false, user=null}) => (
    <div>
    {
        isLogged != true
        ? <h1>Go log in you monkey</h1>
        : <h1> Hi {user.displayName}</h1>
    }
    </div>
)
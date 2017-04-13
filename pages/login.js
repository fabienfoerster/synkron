import {signIn,signOut} from '../lib/auth'

export default () => (
    <div>
        <button onClick={() => signIn()}>Login</button>
        <button onClick={() => signOut()}>Logout</button>
            </div>
)
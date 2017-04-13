import React from 'react'
import firebase from 'firebase'

export default function withSession(Page) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                isLogged: false,
                user: null
            }
        }

        componentDidMount() {
            try {
                firebase.initializeApp({
                    apiKey: "AIzaSyCWCxQ8teq9V8AkWFHp3i4DyBpouCYCRh8",
                    authDomain: "synkron-f9611.firebaseapp.com",
                    databaseURL: "https://synkron-f9611.firebaseio.com",
                    projectId: "synkron-f9611",
                    storageBucket: "synkron-f9611.appspot.com",
                    messagingSenderId: "752005636723"
                })

            } catch (err) {
                // we skip the "already exists" message which is
                // not an actual error when we're hot-reloading
                if (!/already exists/.test(err.message)) {
                    console.error('Firebase initialization error', err.stack)
                }
            }
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    this.setState({
                        isLogged: true,
                        user: user
                    });
                } else {
                    this.setState({
                        isLogged: false,
                        user: null
                    });
                }
            });
        }

        render() {
            return <Page isLogged={this.state.isLogged} user={this.state.user} {...this.props} />
        }
    }
}
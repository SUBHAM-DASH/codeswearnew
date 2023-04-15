import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '9b8d03712e6983e05bdd',
            clientSecret: 'dcffa1e503efa6fb43725d5db969c6a3c93376a7'
        }),
        GoogleProvider({
            clientId: "839901068497-m42ungtqhs4hu9pfla6lmnjh8lg2pn4v.apps.googleusercontent.com",
            clientSecret: "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"
        }),
        FacebookProvider({
            clientId:"1346506619250189",
            clientSecret:"a96728e09731e2c3851a2d19683a1151"
        })
    ]
}

export default NextAuth(authOptions);

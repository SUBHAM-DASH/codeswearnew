import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: '9b8d03712e6983e05bdd',
            clientSecret: 'dcffa1e503efa6fb43725d5db969c6a3c93376a7'
        }),
        GoogleProvider({
            clientId: "839901068497-m42ungtqhs4hu9pfla6lmnjh8lg2pn4v.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
}

export default NextAuth(authOptions);

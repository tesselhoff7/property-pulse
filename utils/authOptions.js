import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authrorization: {
        params: {
          promt: "concent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on succesfull sign in
    async singIn({ profile }) {
      //1. connect to the DB,
      //2. check if user exists
      //3. if not => create user
      //4. if exists => return true to allow sign in
    },
    async session({ session }) {
      // get the user from databas
    },
  },
};

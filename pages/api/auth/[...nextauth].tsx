import NextAuth from 'next-auth';

export default NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [],
    callbacks: {
        jwt({ token }) {
            return { ...token, userRole: 'admin' };
        },
    },
});

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcryptjs';
import prisma from '@lib/prisma';

type User = {
  id: number;
  name: string;
  email: string;
  image: string | null;
  role: string;
};

type findUserType = (
  username: string,
  password: string
) => Promise<null | User>;

const findUser: findUserType = async (username, password) => {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return null;
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) return null;
  return {
    id: user.id,
    name: user.name,
    email: user.username,
    image: user.cover,
    role: user.role,
  };
};

const providers = [
  Providers.Credentials({
    name: 'Credentials',
    credentials: {
      username: { label: 'Username', type: 'text' },
      password: { label: 'Password', type: 'password' },
    },
    async authorize({ username, password }) {
      const user = await findUser(username, password);

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user;
      }
      // If you return null or false then the credentials will be rejected
      return null;
      // You can also Reject this callback with an Error or with a URL:
      // throw new Error('error message') // Redirect to error page
      // throw '/path/to/redirect'        // Redirect to a URL
    },
  }),
];

const pages = {
  signIn: '/signin',
  // signOut: '/auth/signout',
  error: '/signin', // Error code passed in query string as ?error=
  // verifyRequest: '/auth/verify-request', // (used for check email message)
  // newUser: null
};

const jwt = {
  signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
};

const options = {
  pages,
  providers,
  jwt,
};

export default NextAuth(options);

// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return <SignIn path="/sign-in" appearance={{
//     elements: {
//       footerAction: { display: "none"  },
//     },
//   }} />;
// }

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn path="/sign-in" />;
}
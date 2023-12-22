// type SignInResponse = {
//   user: string;
//   session: string;
// };

// export const signIn = async (email: string, password: string): Promise<SignInResponse> => {
//     console.log(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/signin`);
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/signin`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Erreur de connexion");
//     }

//     const data: SignInResponse = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Erreur lors de la connexion:", error);
//     throw error;
//   }
// };

// export const signUp = async (email: string, password: string): Promise<SignInResponse> => {
//   try {
//     const response = await fetch(
//       `${process.env.APP_API_URL}/auth/signup`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Erreur d'inscription");
//     }

//     const data: SignInResponse = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Erreur lors de l'inscription:", error);
//     throw error;
//   }
// };

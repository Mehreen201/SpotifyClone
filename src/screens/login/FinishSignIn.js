import { useEffect } from "react";
import { View, Text } from "react-native";
import {
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { auth, db } from "../../../firebase.config";
import { doc, setDoc } from "firebase/firestore";

export default function FinishSignIn({ navigation }) {
  useEffect(() => {
    const completeSignIn = async () => {
      try {
        if (isSignInWithEmailLink(auth, window.location.href)) {

          const email = localStorage.getItem("emailForSignIn");

          if (!email) {
            alert("Email not found.");
            navigation.replace("Login");
            return;
          }

          const result = await signInWithEmailLink(
            auth,
            email,
            window.location.href
          );

          const isSignup =
            localStorage.getItem("isSignup") === "true";

          if (isSignup) {
            await setDoc(
              doc(db, "users", result.user.uid),
              {
                uid: result.user.uid,
                email: result.user.email,
                createdAt: new Date(),
              }
            );

            localStorage.removeItem("isSignup");
          }

          localStorage.removeItem("emailForSignIn");

          alert("Login Successful!");

          navigation.replace("Home");
        }
      } catch (error) {
        alert(error.message);
      }
    };

    completeSignIn();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Signing you in...</Text>
    </View>
  );
}
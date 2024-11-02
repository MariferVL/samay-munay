import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { db } from "@/firebase";

export async function POST(req) {
  const body = await req.json(); // Asumiendo que el cliente envía el nombre de la colección y los datos
  const { collectionName, services } = body; // Estructura esperada del cuerpo

  try {
    for (const service of services) {
      const docRef = await addDoc(collection(db, collectionName), service);
      console.log("Document written with ID: ", docRef.id);
    }

    return new Response(JSON.stringify({ message: "Documents added successfully." }), { status: 200 });
  } catch (error) {
    console.error("Error adding documents: ", error);
    return new Response(JSON.stringify({ error: "Failed to add documents." }), { status: 500 });
  }
}

//Endpoint call
// fetch("/api/populateFirestore", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     collectionName: "munayInsights", 
//     services: [
//       {
//         question: "What motivates you in your daily life?",
//         options: ["Passion", "Stability", "Adventure"],
//         description: "Reflects the aspects that guide your decisions."
//       },
//       {
//         question: "How do you face challenges?",
//         options: ["With resilience", "Avoiding conflict", "With planning"],
//         description: "Helps you understand your approach to difficulties."
//       },
//       {
//         question: "What do you value most in your relationships?",
//         options: ["Trust", "Loyalty", "Communication"],
//         description: "Shows what you consider fundamental in your connections."
//       },
//       {
//         question: "How do you recharge your energy?",
//         options: ["Time alone", "Socializing", "Practicing hobbies"],
//         description: "Identifies your sources of energy and renewal."
//       },
//       {
//         question: "What work style do you prefer?",
//         options: ["Collaborative", "Independent", "Structured"],
//         description: "Indicates your preferred method for achieving your goals."
//       }
//     ]
//   })
// })
// .then(response => {
//   if (!response.ok) throw new Error("Error in the request");
//   return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.error("Error:", error));

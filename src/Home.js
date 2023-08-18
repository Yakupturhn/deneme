import Head from "./Head";
import Foot from "./Foot";
import { useAuth } from "./context/AuthContext";
export default function Home() {
  const { user } = useAuth();
  return (
    <>
      <Head />
      <br />

      {user && (
        <div style={{ padding: "10px", border: "1px solid red" }}>
          Bu alan sadece giriş yapılınca görünür
        </div>
      )}
      <Foot />
    </>
  );
}

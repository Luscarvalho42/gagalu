import Login from "../components/Login";
import Header from "../components/Header";

export default function LoginPage() {
  return (
    <>
      <Header inLoginPage={true}/>
      <Login/>
    </>
  )
}
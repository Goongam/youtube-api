import Link from "next/link";

export default function LoginBtn() {
  const URL =
    "https://accounts.google.com/o/oauth2/v2/auth?client_id=984820113102-dsnit5cepaodq5s5h45l407n9famgj8n.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:3000/api/oauth2callback&scope=https://www.googleapis.com/auth/youtube.force-ssl";
  return <Link href={URL}>구글 로그인</Link>;
}

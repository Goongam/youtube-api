"use client";

import LoginBtn from "@/components/LoginBtn";

export default function Home() {
  // TODO: accesstoken 만료 시 재 로그인
  // TODO: 토큰 값 expires 만료시 삭제확인
  // video값 수동 입력
  const request = () => {
    fetch("/api/youtube", {
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };
  return (
    <>
      <button onClick={request}>자막요청</button>
      <LoginBtn refresh={false} />
    </>
  );
}

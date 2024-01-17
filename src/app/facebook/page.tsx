"use client";

import { useRouter } from "next/navigation";

const facebook = () => {
  const router = useRouter();
  const handleButton = () => {
    router.push("/");
  };
  return (
    <div>
      facebook page
      <div>
        <button onClick={() => handleButton()}>Back Home</button>
      </div>
    </div>
  );
};

export default facebook;

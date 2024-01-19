"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const facebook = () => {
  const router = useRouter();
  const handleButton = () => {
    router.push("/");
  };
  return (
    <div>
      facebook page
      <div>
        <Button variant="primary">Text</Button>
        <button onClick={() => handleButton()}>Back Home</button>
      </div>
    </div>
  );
};

export default facebook;

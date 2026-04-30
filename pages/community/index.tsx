import withLayoutMain from "@/libs/components/layout/layoutHome";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  console.log("COMMUNITY COMPONENT - PAGES ROUTING");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY{" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};

export default withLayoutMain(Community);

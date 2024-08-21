import { useEffect } from "react";

// component to import bootstrap javascript
export default function AddBootstrap() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  return <></>;
}

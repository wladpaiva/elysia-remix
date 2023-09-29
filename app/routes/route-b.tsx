import { Link } from "@remix-run/react";

export default function RouteB() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Route B</h1>
      <ul>
        <li>
          <Link to="/remix">index</Link>
        </li>
        <li>
          <Link to="/remix/route-a">Route A</Link>
        </li>
      </ul>
    </div>
  );
}

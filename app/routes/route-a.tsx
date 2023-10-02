import { Link } from "@remix-run/react";

export default function RouteA() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Route A</h1>
      <ul>
        <li>
          <Link to="/">index</Link>
        </li>
        <li>
          <Link to="/route-b">Route B</Link>
        </li>
      </ul>
    </div>
  );
}

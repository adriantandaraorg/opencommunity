import * as components from "./components";

const componentOrder = ["Navbar", "Header", "Body", "Reviews", "Footer"];

export default function App() {
  return (
    <div className="m-4">
      {componentOrder.map((name) => {
        const Component = components[name as keyof typeof components];
        return <Component key={name} />;
      })}
    </div>
  );
}

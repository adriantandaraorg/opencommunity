import * as components from "./components";
import { motion } from "framer-motion";

const componentOrder = ["Navbar", "Header", "Body", "Reviews", "Footer"];

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      className="m-4"
    >
      {componentOrder.map((name) => {
        const Component = components[name as keyof typeof components];
        return <Component key={name} />;
      })}
    </motion.div>
  );
}

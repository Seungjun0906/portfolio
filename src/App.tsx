import { useTheme } from "@/hooks/useTheme";

function App() {
  const { onThemeToggle } = useTheme();

  return (
    <div>
      <button onClick={onThemeToggle}>테마 변경</button>
      <div>안녕하세요</div>
    </div>
  );
}

export default App;

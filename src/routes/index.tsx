import { getUsers } from "@/data/functions";
import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
export const Route = createFileRoute("/")({ component: App });

function App() {
  const { data: users } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  return (
    <div>
      <h1>Users from Neon</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

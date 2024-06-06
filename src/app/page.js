import AddUsers from "@/components/AddUsers";
import DisplayUsers from "@/components/DisplayUsers";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <AddUsers />
      <DisplayUsers />
      <Link href={'/customer'}>go to Customer Page</Link><br />
      <Link href={'/todolist'}>go to TodoList Page</Link><br />
      <Link href={'/apiusers'}>go to API-REDUX Page</Link><br />
      <Link href={'/rtkpersist'}>go to RtkPersist Page</Link><br />
    </main>
  );
}

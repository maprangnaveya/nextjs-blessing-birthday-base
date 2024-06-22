import { clearCaches } from "../lib/action-sheet";


export default async function Page() {
    await clearCaches();

    return (
        <main className="h-full relative">
            <p>Clearing cache!</p>
        </main>
    );
}

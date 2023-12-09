export function NavBar() {
  return (
    <main className="flex flex-row justify-center items-center bg-black text-white p-4 text-lg gap-4">
      <img
        className="inline-block h-10"
        src="/lemon64x64.png"
      />
      <div className="flex-1">
        M. Paul Games
      </div>
      <div>
        About
      </div>
    </main>
  )
}

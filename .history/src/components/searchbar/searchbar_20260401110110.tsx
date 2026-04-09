export default function searchbar() {
  return (
    <>
      <div className="p-[.5rem] bg-red-600 rounded-full flex justify-between m-auto max-w-4xs">
        <input type="text" placeholder="O que você está procuranpo?" />
        <button>Pesquisar</button>
      </div>
    </>
  );
}

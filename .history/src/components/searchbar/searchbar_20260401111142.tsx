export default function searchbar() {
  return (
    <>
      <div className="p-[.5rem] bg-black rounded-full flex justify-between m-auto max-w-[768px]">
        <input
          className="bg-white p-1"
          type="text"
          placeholder="O que você está procuranpo?"
        />
        <button>Pesquisar</button>
      </div>
    </>
  );
}

export default function searchbar() {
  return (
    <>
      <div className="p-[.5rem] bg-white rounded-full flex justify-between m-auto max-w-[768px]">
        <input
          className="p-1 color-black"
          type="text"
          placeholder="O que você está procuranpo?"
        />
        <button>Pesquisar</button>
      </div>
    </>
  );
}

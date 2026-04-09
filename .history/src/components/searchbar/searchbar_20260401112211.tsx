export default function searchbar() {
  return (
    <>
      <div className="p-[.5rem] bg-white rounded-full flex justify-between m-auto max-w-[768px]">
        <input
          className="p-1 text-black outline-none border-none"
          type="text"
          placeholder="O que você está procuranpo?"
        />
        <button className="bg-orange-400 p-2 rounded-full">Pesquisar</button>
      </div>
    </>
  );
}

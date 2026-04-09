export default function Searchbar() {
  return (
    <>
      <div className="p-2 bg-white rounded-full flex justify-between m-auto max-w-[768px]">
        <input
          className="p-4 text-black outline-none border-none"
          type="text"
          placeholder="O que você está procuranpo?"
        />
        <button className="bg-orange-400 px-2 rounded-full">Pesquisar</button>
      </div>
    </>
  );
}

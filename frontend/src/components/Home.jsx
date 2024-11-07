import GroupList from "./GroupList";
import Header from "./Header";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-customColors-special-gray">
      <Header />
      <main className="font-everettlight text-black md:p-4 md:m-12">
        <GroupList />
      </main>
    </div>
  );
};

export default Home;

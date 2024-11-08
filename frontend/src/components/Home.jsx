import GroupList from "./GroupList";
import Header from "./Header";

const Home = () => {
  return (
    <div className="w-full h-full min-h-screen min-w-screen bg-customColors-special-gray">
      <Header />
      <main className="font-everettlight text-black md:p-4 md:mt-12 md:mr-12 md:ml-12">
        <GroupList />
      </main>
    </div>
  );
};

export default Home;

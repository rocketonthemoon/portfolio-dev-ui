import Profile from "./components/Profile";

function App() {
  const data = {
    image:
      "https://avatars.githubusercontent.com/u/90383172?s=400&u=db83bb761b0e5b99ec43eee194b2cd89b1230dcf&v=4",
    name: "Abdul Salam",
    position: "Front-end developer",
    email: "salam@example.com",
    phone: "+1 (456) 567 567",
    desc: "Self-motivated developer, who is willing to learn and create outstanding UI applications.",
  };

  return (
    <main className="App">
      <Profile
        image={data.image}
        name={data.name}
        position={data.position}
        email={data.email}
        phone={data.phone}
        desc={data.desc}
      />
    </main>
  );
}

export default App;

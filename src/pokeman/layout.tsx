import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

export function Layout() {
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(false);
  const [searchRespond, setSearchRespond] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const getPokeman = async () => {
    try {
      const pokeman = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/ditto`
      );
      setloading(true);
      setSearchRespond(true);
      setSearchResult(pokeman.data);
    } catch (e) {
      setloading(false);
      console.log("Error", e);
    }
  };

  const handelSearch = async () => {
    await getPokeman();
    console.log("Result got:", searchResult);
  };

  return (
    <div>
      <h1>pokeman</h1>
      <Input
        placeholder="Search Pokeman"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></Input>
      <Button onClick={handelSearch}>Search</Button>
    </div>
  );
}

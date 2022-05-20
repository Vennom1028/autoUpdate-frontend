import './App.css';
import { useState, useEffect } from 'react';
import Table from './components/table';
import SelectBot from './components/selectBot';
import SearchInput from './components/search';
import { Group } from '@mantine/core'
import Button from './components/button';
import { AccessPoint, Plus } from "tabler-icons-react"
import BotsContext from './context/bots';
import { api } from './services/api';


function App() {

  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState({ name: "", versions: [] });

  useEffect(() => {
    const init = async () => {
      const serverResponse = await api.get('/bots');
      setBots(serverResponse);
      serverResponse.forEach(bot => {
        if (bot.name === "Tohru") {
          setSelectedBot(bot)
        }
      });
    }

    init();
  }, [])


  const addVersion = () => {
    console.log("adding version")
  }

  const setEnabled = async (version, value) => {
    const data = {
      version: version,
      enabled: value,
      selectedBot: selectedBot.name
    }
    const response = await api.post("/setEnabled", data)
  }

  return (
    <BotsContext.Provider value={{ bots, setBots, selectedBot, setSelectedBot, setEnabled }}>
      <div className="App">
        <Group position="center" spacing="xs" grow>
          <SelectBot />
          <SearchInput />
          <Button action={addVersion} size="md"><Plus size={18} /></Button >
        </Group>
        <Table />
      </div>
    </BotsContext.Provider>
  );
}

export default App;

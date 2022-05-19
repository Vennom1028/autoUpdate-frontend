import './App.css';
import Table from './components/table';
import SelectBot from './components/selectBot';
import SearchInput from './components/search';
import { Group } from '@mantine/core'
import Button from './components/button';
import { Plus } from "tabler-icons-react"

function App() {
  return (
    <div className="App">
      <Group position="center" spacing="xs" grow>
        <SelectBot />
        <SearchInput />
        <Button><Plus size={18} /></Button >
      </Group>
      <Table />
    </div>
  );
}

export default App;

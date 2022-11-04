import { Base } from '../Base';
import { argsMocked } from '../Base/stories';

function Home() {
  return <Base {...argsMocked} />;
}

export default Home;

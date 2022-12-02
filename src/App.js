import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import Tutorial from './react-admin/tutorial';

import dataProvider from './providers/dataProvider'

const App = () => (
  // <Tutorial />
  <Admin dataProvider={dataProvider} >
    {/* <Resource name="users" list={UserList} recordRepresentation={"name"} icon={UserIcon} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
  </Admin>
);

export default App;
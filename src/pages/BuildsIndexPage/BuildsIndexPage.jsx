import { useEffect, useState } from 'react';
import * as buildsAPI from '../../utilities/builds-api';
import * as userService from '../../utilities/users-service';
import BuildList from '../../components/BuildList/BuildList';
import BuildDetail from '../../components/BuildDetail/BuildDetail';

export default function BuildsIndexPage({user, setUser}) {
  const [savedBuilds, setSavedBuilds] = useState([]);
  const [activeBuild, setActiveBuild] = useState(null);

  useEffect(function() {
    async function getBuilds() {
      const builds = await buildsAPI.getAll();
      const submittedBuilds = builds.filter(build => build.isSubmitted);
      setSavedBuilds(submittedBuilds);
    }
    getBuilds();
  }, []);

  return (
   <main>
     <BuildList user={user} setUser={setUser} setActiveBuild={setActiveBuild} savedBuilds={savedBuilds} />
     <BuildDetail build={activeBuild}/>
   </main>
  );
}
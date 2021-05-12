import { useEffect, useState } from 'react';
import * as buildsAPI from '../../utilities/builds-api';
import * as userService from '../../utilities/users-service';

export default function BuildsIndexPage() {
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
     <div>BuildsIndex</div>
   </main>
  );
}
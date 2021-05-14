import { useEffect, useState, } from 'react';
import { useHistory } from 'react-router-dom'
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
  
  async function deleteBuild(buildId) {
    await buildsAPI.deleteBuild(buildId);
    const builds = await buildsAPI.getAll()
    console.log(builds)
    const submittedBuilds = builds.filter(build => build.isSubmitted);
    setSavedBuilds(submittedBuilds)
    setActiveBuild(null);
  }

  return (
    <>
    <br/>
    <br/>
   <main className="buildindex">
     <BuildList 
     user={user} 
     setUser={setUser} 
     setActiveBuild={setActiveBuild} 
     activeBuild={activeBuild}
     savedBuilds={savedBuilds} 
     deleteBuild={deleteBuild}
      />
      <br/>
      <hr/>
      <br/>
     <BuildDetail build={activeBuild}/>
   </main>
   </>
  );
}
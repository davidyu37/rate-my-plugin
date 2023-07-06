"use client";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { useEffect, useState } from "react";
import useSWR from "swr";
import PluginCard from "./plugin-card";
import { getUrl } from "../../utils/url";
import SkeletonPluginCard from "./skeleton-plugin-card";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// A component for the list of plugins
async function getPlugins() {
  const res = await fetch(`${getUrl()}/api/plugin`);
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

const SkeletonPluginCardList = () => {
  return (
    <>
      {Array(10)
        .fill()
        .map((_, i) => (
          <SkeletonPluginCard key={i} />
        ))}
    </>
  );
};

const PluginList = ({ categoryColorMap }) => {
  const [user, setUser] = useState(null);

  useEffect(() => { 
    const getAnonymous = () => {
      initializeApp(firebaseConfig);
      const auth = getAuth();
    
      signInAnonymously(auth)
        .then((userCredential) => {
          // Signed in...
          var user = userCredential.user;
          setUser(user);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
    
          console.log(errorCode, errorMessage);
          // Handle the error or display an error message to the user.
        });
    };

    getAnonymous();
  }, []);

  const { data: plugins, error } = useSWR("/api/plugin", getPlugins);

  if (error) {
    return <div>Failed to load plugins</div>;
  }

  let newPlugins = [];


  if (plugins && plugins.length > 0) {
    newPlugins = plugins.map((plugin, index) => {
      const categoryName = plugin.metadata.category.toUpperCase();
      return {
        ...plugin,
        color: categoryColorMap[categoryName] || "gray",
      };
    });
  }

  return (
    <div className="flex flex-wrap bg-white dark:bg-slate-800">
      {!plugins && <SkeletonPluginCardList />}
      {newPlugins.map((plugin, index) => (
        <PluginCard
          key={index}
          id={plugin.id}
          logoUrl={plugin.metadata.logo_url}
          url={plugin.metadata.domain}
          name={plugin.metadata.name}
          description={plugin.metadata.description}
          category={plugin.metadata.category}
          color={plugin.color}
          rating={plugin.rating}
          user={user}
        />
      ))}
    </div>
  );
};

export default PluginList;

import './Home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
import { useState, useEffect, useContext } from 'react'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appDownload/AppDownload'
import { createChat } from '@n8n/chat'
import '@n8n/chat/style.css'
import Loading from '../Loading/Loading'

const Home = () => {
  

  const [category, setCategory] = useState("All")
   const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);

  const connectionCheckurl = "http://localhost:4000/api/db-connection"

  
useEffect(() => {
  let cancelled = false;

  const checkConnection = async () => {
    try {
      const response = await fetch(`${connectionCheckurl}`);

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();

      if (!cancelled) {
        setConnected(data.connected === true);
        setLoading(false);
      }
    } catch (error) {
      if (!cancelled) {
        setConnected(false);
        setLoading(false);
      }

      console.error("Database connection check failed:", error);
    }
  };

  checkConnection();

  const interval = setInterval(checkConnection, 2000);

  return () => {
    cancelled = true;
    clearInterval(interval);
  };
}, [connectionCheckurl]);


  useEffect(() => {
    createChat({
      webhookUrl:
        "https://scripterabhi.app.n8n.cloud/webhook/cf4db78c-9db7-4732-a4dc-9b0055f22794/chat",
      mode: "window",
      initialMessages: [
        "Hi there! 👋",
        "Welcome to FoodWayzz. How can I help you today?"
      ],
      i18n: {
        en: {
          title: "FoodWayzz Assistant",
          subtitle: "Your food ordering assistant",
          inputPlaceholder: "Ask me anything..."
        }
      }
    })
  }, [])

  return (
    <div>
      <Header />
      <ExploreMenu
        category={category}
        setCategory={setCategory}
      />
     {loading ? (
  <Loading />
) : connected ? (
  <FoodDisplay category={category} />
) : (
  <p>Database connection failed. Please try again.</p>
)}
      
      
      <AppDownload />
    </div>
  )
}

export default Home
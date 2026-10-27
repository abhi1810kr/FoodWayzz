import './Home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
import { useState, useEffect } from 'react'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appDownload/AppDownload'

import { createChat } from '@n8n/chat'
import '@n8n/chat/style.css'
import Loading from '../Loading/Loading'

const Home = () => {
  const [category, setCategory] = useState("All")
   const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const checkConnection = async () => {
      try {
        const response = await axios.get(`${url}/api/db-connection`)

        if (!response.ok) {
          throw new Error("Database not ready");
        }

        const data = await response.json();

        if (!cancelled) {
          setConnected(data.connected);
          setLoading(!data.connected);
        }
      } catch (error) {
        if (!cancelled) {
          setConnected(false);
          setLoading(true);
        }
      }
    };

    checkConnection();

    const interval = setInterval(checkConnection, 2000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

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
      {
        (loading || !connected) ? <Loading /> : <FoodDisplay category={category} />
      }
      
      
      <AppDownload />
    </div>
  )
}

export default Home
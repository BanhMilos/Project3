import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { OPENAI_API_KEY } from "@env";
import axios from "axios";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hi! I am your assistant. How can I help you today?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Bot",
          avatar: require("../../assets/images/placeholder.png"),
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));

    const userMessage = newMessages[0].text;
    getBotResponse(userMessage);
  }, []);

  const getBotResponse = async (userMessage) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant in a cooking app. You provide users with recipe suggestions, meal plans, nutritional information, ingredient substitutions, and cooking tips based on their preferences and goals. You should respond clearly, helpfully, concisely, offering relevant advice or asking for more details if needed. YOUR ONLY FOCUS IS IN HEALTH, FOOD, MEAL, INGREDIENT, NUTRITION, dont stray from these topics",
            },
            { role: "user", content: userMessage },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botReply = response.data.choices[0].message.content;

      const botMessage = {
        _id: Math.random().toString(),
        text: botReply,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Bot",
          avatar: require("../../assets/images/placeholder.png"),
        },
      };

      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [botMessage])
      );
    } catch (error) {
      console.error("Error communicating with OpenAI:", error);

      const errorMessage = {
        _id: Math.random().toString(),
        text: "Oops! Something went wrong. Please try again later.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Bot",
          avatar: require("../../assets/images/placeholder.png"),
        },
      };

      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [errorMessage])
      );
    }
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: "#0084ff",
              },
              left: {
                backgroundColor: "#f0f0f0",
              },
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ChatScreen;

import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { GetInfoCharacter } from "../services/calls.service";
import { setCharacterGlobalInfo } from "../store/slices/context";
import { RootState } from "../store";
import { CharacterType } from "../models/calls.types";

const CardSimpson = () => {
  const dispatch = useDispatch();
  const characters = useSelector(
    (state: RootState) => state.context.character_user_state
  );

  const [loading, setLoading] = useState(true);

  const getCharactersState = async () => {
    setLoading(true);
    try {
      const response = await GetInfoCharacter();
      console.log("character", response);

      dispatch(setCharacterGlobalInfo(response));
    } catch (error) {
      console.error("Error fetching characters", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharactersState();
  }, []);

  const renderItem = ({ item }: { item: CharacterType }) => (
    <Pressable style={styles.card} onPress={getCharactersState}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.characterName}>{item.character}</Text>
      <Text style={styles.quote}>{item.quote}</Text>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color={"#000"} size={"large"} />
      ) : (
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={(item) => item.character}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default CardSimpson;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f0f0f0",
  },
  listContainer: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: 300,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: "center",
    elevation: 5,
  },
  image: {
    width: "90%",
    height: 250,
    marginBottom: 10,
    resizeMode: "contain",
  },
  characterName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  quote: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});

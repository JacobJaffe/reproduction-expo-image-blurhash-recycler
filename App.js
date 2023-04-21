import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { list as blurhashList } from "./blurhashes.json";
import { useCallback } from "react";

// Each of these blurhashes in `blurhashes.json` is a 32x32 unique image.
const data = blurhashList.map((blurhash) => blurhash);

export default function App() {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <FlashList
        numColumns={3}
        estimatedItemSize={windowWidth / 3}
        data={data}
        renderItem={({ item: blurhash }) => (
          <Image
            placeholder={blurhash}
            style={{
              width: windowWidth / 3,
              height: windowWidth / 3,
              marginBottom: 8,
            }}
            recyclingKey={blurhash}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});
